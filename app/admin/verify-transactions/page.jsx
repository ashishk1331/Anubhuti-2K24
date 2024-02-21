"use client";
import { account } from "@/Appwrite/appwrite.config";
import RegistrationsTable from "@/components/admin/registrations/RegistrationsTable";
import TransactionsTable from "@/components/admin/transactions/TransactionsTable";
import Pagination from "@/components/admin/ui/Pagination";
import Loader from "@/components/ui/Loader";
import {
  getRegistrations,
  getUnverifiedTransactions,
  getUsers,
} from "@/helper/appwrite-helpers";
import { useEffect, useState } from "react";
export default function () {
  const [transactions, setTransactions] = useState();
  const [page, setPage] = useState(1);
  const [capacity, setCapacity] = useState(10);
  /**
   * schema registrations :
   * {
   *   total: total no of users,
   *   documents:[]
   * }
   **/

  async function init() {
    try {
      setTransactions(await getUnverifiedTransactions(page, capacity));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init();
  }, [page, capacity]);

  return (
    <>
      {transactions ? (
        <div className="p-4 mx-auto sm:w-[80%]">
          <TransactionsTable
            transactions={transactions}
            page={page}
            capacity={capacity}
          />
          <Pagination
            page={page}
            setPage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={transactions.total}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:flex-row">
          <Loader />
          <span>Getting Transactions</span>
        </div>
      )}
    </>
  );
}
