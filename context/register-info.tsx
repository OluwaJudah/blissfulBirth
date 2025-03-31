"use client";
import { User } from "@/lib/definitions";
import { createContext, useState } from "react";

export const NewPropertyFormContext = createContext<any>({
  propertyForm: null,
  updatePropertyForm: () => null,
});

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
