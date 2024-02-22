"use client";
import { account } from "@/Appwrite/appwrite.config";
import Pagination from "@/components/admin/ui/Pagination";
import UsersTable from "@/components/admin/users/UsersTable";
import { getUsers } from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";
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

  return (
    <>
      {users && (
        <div className="p-4 sm:w-[80%] mx-auto">
          {/* Display Users  */}
          <UsersTable users={users} page={page} capacity={capacity} />

          {/* Pagination Logic */}
          <Pagination
            page={page}
            setPage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={users.total}
          />
        </div>
      )}
    </>
  );
}
