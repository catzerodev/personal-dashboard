import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/sidebar";

export function DashboardLayout() {
  return (
    <div className="font-sans h-screen overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="h-full bg-slate-950/60 p-6 lg:p-8">
        <div className="mx-auto flex h-full w-full max-w-[1700px] gap-5 overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl">
          <Sidebar />

          <main className="flex-1 h-full overflow-hidden rounded-[30px] border border-white/8 bg-transparent p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
