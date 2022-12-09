import {useEffect, useState} from "react";
import axios from "axios"

// layout for page

import Admin from "../../components/layout/layout";
import CardTableAdmin from "../../components/Cards/CardTableAdmin";

export default function Tables({data}) {
  // const [data,setData] = useState("")
  //   useEffect(() => {
  //       axios.get("https://autogatesystem.herokuapp.com/dataharian")
  //       .then(data => setData(data.data))
  //       .catch(e => console.log(e))
  //   },[])
    
  return (
    <Admin role={"admin"} allUser={data.length} cardMonth={false} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableAdmin data={data} />
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(){

  const res = await axios.get("https://web-production-4f47.up.railway.app/dataharian")
  const data = res.data

  return {
      props: {
          data
      }
  }
}



