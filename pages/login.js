import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Webcam from "react-webcam";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Login() {
  const schema = yup
    .object()
    .shape({
      email: yup.string().email("email tidak valid").required("email harus diisi").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/,'Format email invalid'),
      password: yup.string().required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,// 8 karakter satu kapital satu lowercase dan spesial karakter
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    })
    .required();

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const [result, setResult] = useState();
  const [boolMask, setBoolmask] = useState()
  const [msg,setMsg] = useState()

  const router = useRouter()

  let videoRef = useRef();
  let refButton = useRef(undefined);
  const imgURL = "https://teachablemachine.withgoogle.com/models/f3rdJMbyh/model.json";

    let detectInterval;
    useEffect(() => {
      const ml5 = require("ml5");
      const modelLoaded = () => {
      console.log('model ready')
      if(refButton.current != null){

        refButton.current.onclick = () => {
          // videoRef.current.video
          detect()
        }
      }
      }

        const classifier = ml5.imageClassifier(imgURL, modelLoaded);

    const detect = () => {
      console.log('video detect')
      classifier.classify(videoRef.current.video, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results[0].label);
        if(results[0].label === "Mask"){
          setBoolmask(true)
          setDisabled(false)
        }else{
          setBoolmask(false)
          setDisabled(false)
        }
      });

    };

    return () => {
      if (detectInterval) {
        clearInterval(detectInterval);
      }
    };
  },[]);

  const transition = "hover:shadow hover:shadow-pmMedium transition duration-300"
  const [disabled,setDisabled] = useState(true)

  return (
    <div className="">
        <section className=" flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 ">
          <div className=" w-[300px]">
            <div className="mb-6">
              <Webcam ref={videoRef} mirrored={true} width={100+"%"} style={{ display: "block" }} audio={false} video={"true"} />
              <button ref={refButton} className=" font-bold text-center w-full">CLASSIFY</button>
              <p className="text-center">{result}</p>
            </div>
            <form
              id="form1"
              onSubmit={handleSubmit(async (d) => {
                const res = await axios.post("https://web-production-808a.up.railway.app/users/login",{...d,masker:boolMask})
                if(res.data.msg){
                  setMsg(res.data.msg)
                  alert("Akun tidak ada")
                }else{
                  if(boolMask){
                    if(res.data.role === "security"){
                    router.push("/security/mask")
                  }else if(res.data.role === "datascientist"){
                    router.push("/admin/tables")
                  }
                  alert("Gate is Open!")
                }else{
                  if(res.data.role === "Akun Tidak Ada"){
                    alert("Akun tidak tersedia, silahkan masukkan kembali!")
                  } else {
                    router.push("/login")
                    alert("Anda Tidak dapat Masuk Silahkan Pakai Masker")
                  }
                }
              }
                
              })}
            >
               <div className="relative mb-[14px]">
                <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Email</p>
                <input {...register("email")} placeholder="Email" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px] disabled:opacity-25" disabled={disabled} />
                <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.5833 2.25004C14.5833 1.47087 13.9458 0.833374 13.1667 0.833374H1.83334C1.05417 0.833374 0.416672 1.47087 0.416672 2.25004V10.75C0.416672 11.5292 1.05417 12.1667 1.83334 12.1667H13.1667C13.9458 12.1667 14.5833 11.5292 14.5833 10.75V2.25004ZM13.1667 2.25004L7.50001 5.79171L1.83334 2.25004H13.1667ZM13.1667 10.75H1.83334V3.66671L7.50001 7.20837L13.1667 3.66671V10.75Z"
                      fill="#2CD5D9"
                    />
                  </svg>
                </div>
                <p className="text-red-900 text-xs">{errors.email?.message}</p>
              </div>
              <div className="relative mb-[14px]">
                <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Password</p>
                <input {...register("password")} type={'password'} placeholder="Password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px] disabled:opacity-25" disabled={disabled} />
                <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.16654 0.9375C5.16654 0.418945 5.5638 0 6.05551 0H6.94449C7.4362 0 7.83346 0.418945 7.83346 0.9375V5.06543L11.2227 3.00293C11.6477 2.74512 12.1922 2.89746 12.4367 3.3457L12.8811 4.15723C13.1256 4.60547 12.9812 5.17969 12.5561 5.4375L9.16691 7.5L12.5561 9.5625C12.9812 9.82031 13.1256 10.3945 12.8811 10.8428L12.4367 11.6543C12.1922 12.1025 11.6477 12.2578 11.2227 11.9971L7.83346 9.93457V14.0625C7.83346 14.5811 7.4362 15 6.94449 15H6.05551C5.5638 15 5.16654 14.5811 5.16654 14.0625V9.93457L1.77734 12C1.3523 12.2578 0.807807 12.1055 0.56334 11.6572L0.118855 10.8457C-0.125612 10.3975 0.0188453 9.82324 0.443885 9.56543L3.83309 7.5L0.443885 5.4375C0.0188453 5.17969 -0.125612 4.60547 0.118855 4.15723L0.56334 3.3457C0.807807 2.89453 1.3523 2.74219 1.77734 3L5.16654 5.0625V0.9375Z"
                      fill="#2CD5D9"
                    />
                  </svg>
                </div>
                <p className="text-red-900 text-xs">{errors.password?.message}</p>
              </div>
              {/* <Link href={"/admin/tables"}> */}
              <input type="submit" className={"rounded-[20px] border-solid w-full h-[40px] bg-pmLight px-[34px] mb-[10px] active:bg-pmMedium text-white cursor-pointer disabled:opacity-25 " + transition} value={"Login"} disabled={disabled}/>
              {/* </Link> */}
              <Link href={"/signup"} ><p className="border border-[#2CD5D9] rounded-[20px] border-solid w-full h-[40px] bg-white px-[34px] mb-[10px] text-pmMedium grid place-content-center cursor-pointer select-none hover:text-white hover:bg-pmMedium duration-300 transition">SignUp</p></Link>
            </form>
          </div>
      </section>
    </div>
  );
}
