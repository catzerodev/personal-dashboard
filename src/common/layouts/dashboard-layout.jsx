import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/sidebar";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="min-h-screen bg-slate-950/45 backdrop-blur-[2px]">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Sidebar />

          <main className="flex-1 p-4 lg:p-8">
            <div className="mx-auto w-full max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}