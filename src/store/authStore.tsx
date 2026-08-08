import { create } from "zustand";
import { persist } from "zustand/middleware";
import { users } from "../data/data";
import type { LoginFormData, User } from "../schemas/loginSchema";

type AuthStore = {
  users: User[];
  user: User | null;
  login: (value: LoginFormData) => User | null;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      users: users,
      user: null,

      login: (values) => {
        const foundUser = users.find(
          (user) =>
            user.email === values.email && user.password === values.password,
        );
        if (!foundUser) return null;
        set({
          user: foundUser,
        });
        return foundUser;
      },

      logout: () => {
        set({
          user: null,
        });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
