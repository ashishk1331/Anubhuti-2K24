"use client";
import { account } from "@/Appwrite/appwrite.config";
import TransactionsTable from "@/components/admin/AllTransactions/TransactionsTable";

import Pagination from "@/components/admin/ui/Pagination";
import {
  getRegistrations,
  getAllTransactions,
  getUsers,
} from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";
export default function () {
  const [transactions, setTransactions] = useState();
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
      setTransactions(await getAllTransactions(page, capacity));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init();
  }, [page, capacity]);

  return (
    <>
      {transactions && (
        <div className="w-full p-4 mx-auto">
          {/* Display Registrations  */}
          <TransactionsTable
            transactions={transactions}
            page={page}
            capacity={capacity}
          />
          {/* Pagination Logic */}
          <Pagination
            page={page}
            setPage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={transactions.total}
            display={false}
          />
        </div>
      )}
    </>
  );
}
