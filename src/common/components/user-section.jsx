import { Power } from "lucide-react";
import { useNavigate } from "react-router";
import { useUser } from "../../features/tasks/context/user-context";
import { useAuth } from "../../features/auth/hooks/use-auth";

export default function UserSection() {
  const { name, role, avatar } = useUser();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="mt-6 rounded-[24px] border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-16 w-16 rounded-full border border-white/10 object-cover shadow-md"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate text-[1.45rem] font-medium leading-none tracking-[-0.02em] text-white">
            {name}
          </p>
          <p className="mt-2 text-sm text-white/55">{role}</p>
        </div>

        <button
          onClick={handleLogout}
          title="Logout"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:bg-cyan-400/20 hover:text-cyan-200 hover:shadow-[0_0_22px_rgba(34,211,238,0.45)] active:scale-95"
        >
          <Power size={19} strokeWidth={2.3} />
        </button>
      </div>
    </div>
  );
}