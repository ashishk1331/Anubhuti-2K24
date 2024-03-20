"use client";
import { account } from "@/Appwrite/appwrite.config";
import Pagination from "@/components/admin/ui/Pagination";
import { getRegistrations, getUsers } from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";

import Table from "@/components/admin/ui/Table.jsx";

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

  console.log(registrations);

  const columns = [
    {
      header: "name",
      key: "name",
    },
    {
      header: "email",
      key: "email",
    },
    {
      header: "type",
      key: "type",
    },
    {
      header: "college",
      key: "college",
    },
    {
      header: "year",
      key: "year",
    },
    {
      header: "phone",
      key: "pno",
    },
    {
      header: "gender",
      key: "gender",
    },
  ];

  return (
    registrations && (
      <div className="mb-12">
        {/* Display Registrations  */}
        <Table
          title="Registrations"
          events={registrations.documents}
          columns={columns}
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
    )
  );
}
