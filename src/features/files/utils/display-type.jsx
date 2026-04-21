import { Leaf, Skull, Flame, Droplets, Zap, Bug, Mountain, Snowflake } from "lucide-react";

const typeConfig = {
  grass: {
    className: "bg-lime-500 text-white",
    icon: Leaf,
  },
  poison: {
    className: "bg-fuchsia-500 text-white",
    icon: Skull,
  },
  fire: {
    className: "bg-red-500 text-white",
    icon: Flame,
  },
  water: {
    className: "bg-blue-500 text-white",
    icon: Droplets,
  },
  electric: {
    className: "bg-yellow-400 text-black",
    icon: Zap,
  },
  bug: {
    className: "bg-green-600 text-white",
    icon: Bug,
  },
  rock: {
    className: "bg-stone-500 text-white",
    icon: Mountain,
  },
  ice: {
    className: "bg-cyan-400 text-black",
    icon: Snowflake,
  },
};

export const DisplayType = ({ type }) => {
  const config = typeConfig[type];
  const Icon = config?.icon;

  return (
    <span
      className={`flex items-center gap-1 rounded-[10px] px-4 py-2 text-sm font-bold uppercase shadow-md ${
        config?.className || "bg-white/10 text-white"
      }`}
    >
      {Icon && <Icon size={16} />}
      {type}
    </span>
  );
};