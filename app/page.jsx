import { Toaster } from "react-hot-toast";

// Components
import LoginLogout from "@/components/ui/Login.Logout";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between min-h-[90vh] p-24">
        <Toaster position="top-left" />
        <h1>Hello</h1>
      </main>
    </>
  );
}
