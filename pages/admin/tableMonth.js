import {useEffect, useState} from "react";
import axios from "axios"

// layout for page

import Admin from "../../components/layout/layout";
import CardTableAdmin from "../../components/Cards/CardTableAdmin";

export default function Tables({data}) {
  // const [data,setData] = useState("")
  const [jumlahMonth,setJumlahMonth] = useState("")
  const [dataMonth, setDataMonth] = useState("")
  const DataMonth = (data) => {
    setDataMonth(data)
  }

  //   useEffect(() => {
  //       axios.get("https://autogatesystem.herokuapp.com/dataharian")
  //       .then(data => setData(data.data))
  //       .catch(e => console.log(e))
  //   },[])
    useEffect(() => {
      if(dataMonth != ""){
        axios.get("https://autogatesystem.herokuapp.com/dataharian/"+dataMonth[1]+"/"+dataMonth[0]+"/jumlah")
        .then(data => setJumlahMonth(data.data[0].Jumlah))
        .catch(e => console.log(e))
      }
    },[dataMonth])

  return (
    <Admin role={"admin"} allUser={data && data.length} jumlahMonth={jumlahMonth} cardMonth={true} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableAdmin data={data} typeMonth={true} dataMonth={DataMonth}  />
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(){

  const res = await axios.get("https://autogatesystem.herokuapp.com/dataharian")
  const data = res.data

  return {
      props: {
          data
      }
  }
}

