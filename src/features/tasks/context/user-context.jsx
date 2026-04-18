import { createContext, useContext } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = {
    name: "Tania",
    role: "Student",
    avatar: "/avatar-user.jpg", // pon tu imagen en public/
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}