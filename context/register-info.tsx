"use client";
import { User, NewPropertyFormContext } from "@/lib/definitions";
import { useState } from "react";

export function UserFormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const updateUserData = (values: Partial<User>) => {
    setUser(user ? { ...user, ...values } : null);
  };
  // adding this code 👇🏽
  return (
    <NewPropertyFormContext.Provider value={{ user, updateUserData }}>
      {children}
    </NewPropertyFormContext.Provider>
  );
}
