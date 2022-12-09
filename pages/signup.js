import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { IoCaretBack } from 'react-icons/io5' 

export default function SignUp() {
  const schema = yup
    .object()
    .shape({
      namabelakang: yup.string().required(),
      namadepan: yup.string().required("Please Insert"),
      nomor_telepon: yup.string().required("Please Insert").nullable(),
      gender: yup.bool().oneOf([true,false],null).required("Please Choose One").nullable(),
      birthdate: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(4).max(15).required(),
      confirmpassword: yup.string().oneOf([yup.ref("password")],"harus sama").required(),
      username: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter()

  return (
    <div>
    <div className=" flex items-center relative z-30 IoCaretBack cursor-pointer" onClick={() => router.push("/login")}>
      <IoCaretBack size={50}/>
      <p>Back To Login</p>
    </div>
    <section className=" flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 ">
      <div className=" w-[300px]">
        <form
          id="form1"
          onSubmit={handleSubmit((d) => {
            axios.post("https://web-production-4f47.up.railway.app/users",d)
                .then(data => router.push("/login"))

          })}
        >
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">First Name</p>
            <input {...register("namadepan")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" placeholder="Insert First Name Here" />
            <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
              <svg className="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.6875 4.0625C4.6875 5.61312 5.94938 6.875 7.5 6.875C9.05062 6.875 10.3125 5.61312 10.3125 4.0625C10.3125 2.51188 9.05062 1.25 7.5 1.25C5.94938 1.25 4.6875 2.51188 4.6875 4.0625ZM12.5 13.125H13.125V12.5C13.125 10.0881 11.1619 8.125 8.75 8.125H6.25C3.8375 8.125 1.875 10.0881 1.875 12.5V13.125H12.5Z"
                  fill="#2CD5D9"
                />
              </svg>
            </div>
            <p className="text-red-900 text-xs">{errors.namadepan?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Last Name</p>
            <input {...register("namabelakang")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" placeholder="Insert Last Name Here" />
            <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
              <svg className="" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.6875 4.0625C4.6875 5.61312 5.94938 6.875 7.5 6.875C9.05062 6.875 10.3125 5.61312 10.3125 4.0625C10.3125 2.51188 9.05062 1.25 7.5 1.25C5.94938 1.25 4.6875 2.51188 4.6875 4.0625ZM12.5 13.125H13.125V12.5C13.125 10.0881 11.1619 8.125 8.75 8.125H6.25C3.8375 8.125 1.875 10.0881 1.875 12.5V13.125H12.5Z"
                  fill="#2CD5D9"
                />
              </svg>
            </div>
            <p className="text-red-900 text-xs">{errors.namabelakang?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Email</p>
            <input {...register("email")} placeholder="Email" className=" invalid:border-red-600 rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
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
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white" >Birthdate</p>
            <input type={"date"} {...register("birthdate")} placeholder="DD/MM/YYYY" className=" invalid:border-red-600 rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
            <p className="text-red-900 text-xs">{errors.birthdate?.message}</p>
          </div>
          <div className="relative mb-[14px] ">
            <p className=" ">Gender</p>
            <div className="flex items-center">
              <label className="mr-2">Male</label>
              <input type={"radio"} {...register("gender")} value={true} placeholder="Male" className=" inline-block w-[30px] h-[30px] mr-4" />
              <label className="mr-2">Female</label>
              <input type={"radio"} {...register("gender")} value={false} placeholder="Female" className=" inline-block w-[30px] h-[30px]" />
            </div>
            <p className="text-red-900 text-xs">{errors.gender?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Phone Number</p>
            <input {...register("nomor_telepon")} placeholder="+62-832-2143-2990" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
            <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.5672 3.04648L12.6951 1.17617C12.5631 1.04353 12.4061 0.938294 12.2332 0.866499C12.0604 0.794704 11.8751 0.757768 11.6879 0.757813C11.3064 0.757813 10.9479 0.907227 10.6789 1.17617L8.66445 3.19062C8.53182 3.32268 8.42658 3.47965 8.35478 3.6525C8.28299 3.82535 8.24605 4.01068 8.24609 4.19785C8.24609 4.5793 8.39551 4.93789 8.66445 5.20684L10.1375 6.67988C9.79269 7.43989 9.3133 8.13129 8.72246 8.7207C8.1331 9.31298 7.44177 9.79412 6.68164 10.141L5.2086 8.66797C5.07654 8.53533 4.91957 8.43009 4.74672 8.3583C4.57387 8.2865 4.38854 8.24956 4.20137 8.24961C3.81992 8.24961 3.46133 8.39902 3.19238 8.66797L1.17617 10.6807C1.04337 10.813 0.938042 10.9702 0.866243 11.1434C0.794445 11.3165 0.757595 11.5022 0.757813 11.6896C0.757813 12.0711 0.907228 12.4297 1.17617 12.6986L3.04473 14.5672C3.47363 14.9979 4.06602 15.2422 4.67422 15.2422C4.80254 15.2422 4.92559 15.2316 5.04688 15.2105C7.41641 14.8203 9.7666 13.56 11.6633 11.665C13.5582 9.77188 14.8168 7.42344 15.2123 5.04688C15.3318 4.3209 15.091 3.57383 14.5672 3.04648Z"
                  fill="#2CD5D9"
                />
              </svg>
            </div>
            <p className="text-red-900 text-xs">{errors.nomor_telepon?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Username</p>
            <input {...register("username")} placeholder="username" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
            <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.49999 0.543701C4.12999 0.543701 0.583328 4.09037 0.583328 8.46037C0.583328 12.8304 4.12999 16.377 8.49999 16.377H12.4583V14.7937H8.49999C5.06416 14.7937 2.16666 11.8962 2.16666 8.46037C2.16666 5.02453 5.06416 2.12703 8.49999 2.12703C11.9358 2.12703 14.8333 5.02453 14.8333 8.46037V9.59245C14.8333 10.2179 14.2712 10.8354 13.6458 10.8354C13.0204 10.8354 12.4583 10.2179 12.4583 9.59245V8.46037C12.4583 6.27537 10.685 4.50203 8.49999 4.50203C6.31499 4.50203 4.54166 6.27537 4.54166 8.46037C4.54166 10.6454 6.31499 12.4187 8.49999 12.4187C9.59249 12.4187 10.59 11.9754 11.3025 11.255C11.8171 11.9595 12.7037 12.4187 13.6458 12.4187C15.2054 12.4187 16.4167 11.152 16.4167 9.59245V8.46037C16.4167 4.09037 12.87 0.543701 8.49999 0.543701ZM8.49999 10.8354C7.18583 10.8354 6.12499 9.77453 6.12499 8.46037C6.12499 7.1462 7.18583 6.08537 8.49999 6.08537C9.81416 6.08537 10.875 7.1462 10.875 8.46037C10.875 9.77453 9.81416 10.8354 8.49999 10.8354Z"
                  fill="#2CD5D9"
                />
              </svg>
            </div>
            <p className="text-red-900 text-xs">{errors.username?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Password</p>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
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
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Confirm Password</p>
            <input
              {...register("confirmpassword")}
              type="password"
              placeholder="Confirm Password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <div className=" absolute w-[31px] h-[31px] bg-[#DAFEFF] right-[2%] top-[5px] rounded-full grid place-content-center">
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.16654 0.9375C5.16654 0.418945 5.5638 0 6.05551 0H6.94449C7.4362 0 7.83346 0.418945 7.83346 0.9375V5.06543L11.2227 3.00293C11.6477 2.74512 12.1922 2.89746 12.4367 3.3457L12.8811 4.15723C13.1256 4.60547 12.9812 5.17969 12.5561 5.4375L9.16691 7.5L12.5561 9.5625C12.9812 9.82031 13.1256 10.3945 12.8811 10.8428L12.4367 11.6543C12.1922 12.1025 11.6477 12.2578 11.2227 11.9971L7.83346 9.93457V14.0625C7.83346 14.5811 7.4362 15 6.94449 15H6.05551C5.5638 15 5.16654 14.5811 5.16654 14.0625V9.93457L1.77734 12C1.3523 12.2578 0.807807 12.1055 0.56334 11.6572L0.118855 10.8457C-0.125612 10.3975 0.0188453 9.82324 0.443885 9.56543L3.83309 7.5L0.443885 5.4375C0.0188453 5.17969 -0.125612 4.60547 0.118855 4.15723L0.56334 3.3457C0.807807 2.89453 1.3523 2.74219 1.77734 3L5.16654 5.0625V0.9375Z"
                  fill="#2CD5D9"
                />
              </svg>
            </div>
            <p className="text-red-900 text-xs">{errors.confirmpassword?.message}</p>
          </div>
          <input type="submit" className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white cursor-pointer" value={"Next"} />
        </form>
      </div>
    </section>
    </div>
  );
}
