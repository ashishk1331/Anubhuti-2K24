"use client";
import { getAllRegistrations } from "@/helper/appwrite-helpers";
import exportToExcel from "@/helper/excelHelper";

export default function () {
  async function downloadRegistrationsData() {
    const data = await getAllRegistrations();
    exportToExcel(data.documents, "registrations");
  }
  return (
    <div className="p-8">
      <h1>Download Data</h1>
      <div>
        <div className="p-1 my-4 ">
          <button
            onClick={downloadRegistrationsData}
            className="p-1 border rounded-md"
          >
            Download Registrations Data
          </button>
        </div>
      </div>
    </div>
  );
}
