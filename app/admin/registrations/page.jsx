"use client";
import { account } from "@/Appwrite/appwrite.config";
import RegistrationsTable from "@/components/admin/registrations/RegistrationsTable";
import Pagination from "@/components/admin/ui/Pagination";
import { getRegistrations, getUsers } from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";
export default function () {
  const [registrations, setRegistrations] = useState();
  const [page, setPage] = useState(1);
  const [capacity, setCapacity] = useState(20);
  /**
   * schema registrations :
   * {
   *   total: total no of users,
   *   documents:[]
   * }
   **/

  async function init() {
    try {
      setRegistrations(await getRegistrations(page, capacity));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init();
  }, [page, capacity]);

  return (
    <>
      {registrations && (
        <div className="p-4 mx-auto sm:w-[80%]">
          {/* Display Registrations  */}
          <RegistrationsTable
            registrations={registrations}
            page={page}
            capacity={capacity}
          />
          {/* Pagination Logic */}
          <Pagination
            page={page}
            setPage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={registrations.total}
            display={false}
          />
        </div>
      )}
    </>
  );
}
