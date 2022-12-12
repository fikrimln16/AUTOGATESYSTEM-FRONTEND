import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
// components

import AdminNavbar from "../Navbars/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";
import HeaderStats from "../Headers/HeaderStats";
import FooterAdmin from "../Footers/FooterAdmin";

export default function Admin({ children, role,allUser, jumlahMonth, cardMonth }) {
  const [date,setDate] = useState(new Date())
  const [jumlah,setJumlah] = useState(0)
  const [jumlahNoMask,setJumlahNoMask] = useState(0)

    useEffect(() => {
      const getData = async () => {
        const res = await Promise.all([
          axios.get(`https://web-production-808a.up.railway.app/security/withmask/jumlah/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`),
          axios.get(`https://web-production-808a.up.railway.app/security/nomask/jumlah/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
        ])
        setJumlah(res[0].data[0].Jumlah)
        setJumlahNoMask(res[1].data[0].Jumlah)
        
      }

      getData()

        
    },[])
  return (
    <div className=" font-[Helvetica]">
      <Sidebar role={role} />
      <div className="relative md:ml-64 ">
        <AdminNavbar role={role} />
        {/* Header */}
        { role === "security"?
         <HeaderStats jumlahMask={jumlah} jumlahNoMask={jumlahNoMask} role={role}  />:
         <HeaderStats  role={role} allUser={allUser} jumlahMonth={jumlahMonth} cardMonth={cardMonth}/>
        }
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(){
//   const date= new Date()
  
//   const res = await Promise.all([
//             axios.get(`https://autogatesystem.herokuapp.com/security/withmask/jumlah/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`),
//             axios.get(`https://autogatesystem.herokuapp.com/security/nomask/jumlah/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
//           ])
//   const jumlah = res[0].data[0].Jumlah
//   const jumlahNoMask = res[1].data[0].Jumlah

//   return {
//       props: {
//           jumlah,
//           jumlahNoMask
//       }
//   }
// }
