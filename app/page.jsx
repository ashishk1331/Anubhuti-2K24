import { Toaster } from "react-hot-toast";
import InitStore from "@/components/ui/InitStore";
import LoginLogout from "@/components/ui/Login.Logout";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Toaster position="top-left" />
      <h1>Hello</h1>
      {/* <InitStore /> */}
      <LoginLogout />
    </main>
  );
}
