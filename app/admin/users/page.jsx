"use client";
import { account } from "@/Appwrite/appwrite.config";
import Pagination from "@/components/admin/ui/Pagination";
import UsersTable from "@/components/admin/users/UsersTable";
import { getUsers } from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";

import Table from "@/components/admin/ui/Table.jsx";

export default function () {
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const [capacity, setCapacity] = useState(20);
  /**
   * schema users :
   * {
   *   total: total no of users,
   *   users:[]
   * }
   **/

  async function init() {
    try {
      setUsers(await getUsers());
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      header: "name",
      key: "name",
    },
    {
      header: "email",
      key: "email",
    },
  ];

  console.log(users);

  return (
    users && (
      <div className="mb-12">
        {/* Display Users  */}
        <Table title="Users" events={users.users} columns={columns} />

        {/* Pagination Logic */}
        <Pagination
          page={page}
          setPage={setPage}
          capacity={capacity}
          setCapacity={setCapacity}
          total={users.total}
          display={false}
        />
      </div>
    )
  );
}
