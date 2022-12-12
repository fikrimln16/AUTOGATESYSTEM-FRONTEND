import React, { useState } from "react";
import ExportExcel from "../exportExcel";
import { useRef } from "react";

export default function CardTableAdmin({data,typeMonth, dataMonth}) {
  const select = useRef();
  const [selectValue, setSelectValue] = useState("");
  const [date, setDate] = useState("")
  const [dataExcel,setDataExcel] = useState(data)

  return (
    <>
      <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow rounded bg-white"}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center justify-between">
            <h3 className={"font-semibold text-lg "}>User Tables</h3>
            <div>
              {!typeMonth && <input type="date" name="date" id="" onChange={e => setDate(e.target.value)} className="border border-white rounded-md bg-scLight text-white py-1 px-2" />}
              {typeMonth && <input type="month" name="month" id="" onChange={e => {setDate(e.target.value)
                dataMonth(e.target.value.split("-"))}} className="border border-white rounded-md bg-scLight text-white p-1" />}
              <select ref={select} name="" id="" defaultValue={""} onChange={(e) => setSelectValue(e.target.value)} className="border border-white rounded-md bg-scLight text-white p-1 ml-4">
                <option value="">All</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <ExportExcel excelData={dataExcel && typeMonth ?dataExcel
                .filter((data) => date === ""?data:data.input_at.slice(0,7) === date)
                .slice(...(selectValue == "" ? [0,undefined] : [0,selectValue])):data
                .filter((data) => date === ""?data:data.input_at.slice(0,10) === date)
                .slice(...(selectValue == "" ?[0,undefined] : [0,selectValue]))} fileName={"exportExcel"} />
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className=" bg-pmLight/50">
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}>Data Harian id</th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}>Nama Depan</th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}>Nama Belakang</th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}>Email</th>
                <th className={"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "}>Date User</th>
              </tr>
            </thead>
            <tbody>
              {data && !typeMonth && data
                .filter((data) => date === ""?data:data.input_at.slice(0,10) === date)
                .slice(...(selectValue == "" ?[0,undefined] : [0,selectValue]))
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.dataharian_id}</td>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{data.namadepan}</th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.namabelakang}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.email}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.input_at}</td>
                    </tr>
                  );
                })}
              {data && typeMonth && data
                .filter((data) => date === ""?data:data.input_at.slice(0,7) === date)
                .slice(...(selectValue == "" ? [0,undefined] : [0,selectValue]))
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.dataharian_id}</td>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{data.namadepan}</th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.namabelakang}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.email}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.input_at}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}