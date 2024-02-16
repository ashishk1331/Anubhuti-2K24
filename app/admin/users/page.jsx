"use client";
import { account } from "@/Appwrite/appwrite.config";
import Pagination from "@/components/admin/users/Pagination";
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
   *   users[]
   * }
   **/

  function pagehandler(i) {
    if (i >= 1 && i <= Math.ceil(users.total / capacity) && i != page)
      setPage(i);
  }
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
        <div>
          <div>
            {/* Display Users  */}
            <ul>
              {users.users
                .slice(page * capacity - capacity, page * capacity)
                .map((data, index) => (
                  <li key={data.$id}>{data.name}</li>
                ))}
            </ul>
          </div>
          {/* Pagination Logic */}
          <Pagination
            pagehandler={pagehandler}
            page={page}
            setpage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={users.total}
          />
        </div>
      )}
    </>
  );
}
