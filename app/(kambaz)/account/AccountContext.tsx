"use client";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import * as client from "./client";

export type User = {
  _id: string; username: string; password: string; firstName: string; lastName: string; email: string; role: string;
  loginId: string; section: string; lastActivity: string; totalActivity: string; dob?: string;
};
export const emptyUser: User = {
  _id: "", username: "", password: "", firstName: "", lastName: "", email: "", role: "STUDENT",
  loginId: "", section: "", lastActivity: "", totalActivity: "", dob: "",
};
type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  loadUsers: () => Promise<void>;
  createUser: (user: User) => Promise<User>;
  deleteUser: (userId: string) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
};
const AccountContext = createContext<AccountContextValue | null>(null);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const loadUsers = useCallback(async () => setUsers(await client.findAllUsers()), []);
  const createUser = async (user: User) => {
    const created = await client.createUser(user);
    setUsers(previous => [...previous, created]);
    return created;
  };
  const deleteUser = async (userId: string) => {
    await client.deleteUser(userId);
    setUsers(previous => previous.filter(user => user._id !== userId));
    if (currentUser?._id === userId) setCurrentUser(null);
  };
  const updateUser = async (user: User) => {
    const saved = await client.updateUser(user);
    setUsers(previous => previous.map(u => u._id === user._id ? saved : u));
    if (currentUser?._id === user._id) setCurrentUser(saved);
  };
  return <AccountContext.Provider value={{ currentUser, setCurrentUser, users, loadUsers, createUser, updateUser, deleteUser }}>{children}</AccountContext.Provider>;
}
export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) throw new Error("useAccountContext must be used inside AccountProvider");
  return value;
}
