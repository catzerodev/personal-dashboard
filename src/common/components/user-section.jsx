import { useUser } from "../../features/tasks/context/user-context";

export default function UserSection() {
  const { name, role, avatar } = useUser();

  return (
    <div className="mt-auto rounded-[22px] border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-14 w-14 rounded-full border border-white/10 object-cover"
        />

        <div className="min-w-0">
          <p className="truncate text-xl font-medium text-white">{name}</p>
          <p className="text-sm text-white/55">{role}</p>
        </div>
      </div>
    </div>
  );
}