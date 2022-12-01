import * as FileSaver from "file-saver";
import * as XLSX from "sheetjs-style";

const ExportExcel = ({ excelData, fileName }) => {
  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8;";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
      <button onClick={(e) => confirm("Apakah mau download excel") === true?exportToExcel(fileName):null} className=" bg-scLight p-2 text-xs text-white rounded-md active:bg-scDark">Export Data</button>
  );
};

export default ExportExcel;
