// utils/exportToExcel.js
import * as XLSX from "xlsx";

const exportToExcel = (data, fileName) => {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
};

export default exportToExcel;
