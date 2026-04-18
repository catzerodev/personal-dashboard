import { useUser } from "../../features/tasks/context/user-context";

export default function UserSection() {
  const { name, role, avatar } = useUser();

  return (
    <div className="mt-6 rounded-[24px] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-16 w-16 rounded-full border border-white/10 object-cover shadow-md"
        />

        <div className="min-w-0">
          <p className="truncate text-[1.7rem] font-medium tracking-[-0.02em] leading-none text-white">
            {name}
          </p>
          <p className="mt-2 text-base text-white/55">{role}</p>
        </div>
      </div>
    </div>
  );
}