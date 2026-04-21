import { Mars, Venus, ShieldQuestion } from "lucide-react";

export const DisplayGender = ({ gender }) => {
  if (gender === "Female") {
    return <Venus className="text-pink-400" size={18} />;
  }

  if (gender === "Male") {
    return <Mars className="text-blue-400" size={18} />;
  }

  return <ShieldQuestion className="text-gray-400" size={18} />;
};