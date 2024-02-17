"use client";
import { account } from "@/Appwrite/appwrite.config";
import RegistrationsTable from "@/components/admin/registrations/RegistrationsTable";
import TransactionsTable from "@/components/admin/transactions/TransactionsTable";
import Pagination from "@/components/admin/ui/Pagination";
import {
  getRegistrations,
  getTransactions,
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
      setTransactions(await getTransactions());
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {transactions && (
        <div className="p-4 mx-auto sm:w-[80%]">
          {/* Display Registrations  */}
          <TransactionsTable
            transactions={transactions}
            page={page}
            capacity={capacity}
          />
          {/* Pagination Logic */}
          <Pagination
            page={page}
            setpage={setPage}
            capacity={capacity}
            setCapacity={setCapacity}
            total={transactions.total}
          />
        </div>
      )}
    </>
  );
}
