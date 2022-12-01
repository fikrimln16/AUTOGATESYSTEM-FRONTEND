import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
// components

import CardTable from "../../components/Cards/CardTable"

// layout for page

import Admin from "../../components/layout/layout";

export default function Mask() {
    const [data,setData] = useState()
    useEffect(() => {
        axios.get("https://autogatesystem.herokuapp.com/security/withmask")
        .then(data => setData(data.data))
        .catch(e => console.log(e))
    },[])
  return (
    <Admin role={"security"}>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable data={data} />
        </div>
      </div>
    </Admin>
  );
}

