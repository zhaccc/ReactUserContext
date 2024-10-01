import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { UserState } from './types.ts';

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        set({ user });
      },
      updateFirstName: (firstName: string) =>
        set((state) => ({
          user: { ...state.user!, firstName },
        })),
      updateLastName: (lastName: string) =>
        set((state) => ({
          user: { ...state.user!, lastName },
        })),
      updateIsAdmin: (isAdmin: boolean) =>
        set((state) => ({
          user: { ...state.user!, isAdmin },
        })),
      updateIsLoggedIn: (isLoggedIn: boolean) =>
        set((state) => ({
          user: { ...state.user!, isLoggedIn },
        })),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
