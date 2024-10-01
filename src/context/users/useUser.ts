import { useUserStore } from './useUserStore';

export default function useUser() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const updateFirstName = useUserStore((state) => state.updateFirstName);
  const updateLastName = useUserStore((state) => state.updateLastName);
  const updateIsAdmin = useUserStore((state) => state.updateIsAdmin);
  const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);

  const isUserLoggedIn = user?.isLoggedIn;
  const isUserAdmin = user?.isAdmin;

  return {
    user,
    isUserLoggedIn,
    isUserAdmin,
    setUser,
    updateFirstName,
    updateLastName,
    updateIsAdmin,
    updateIsLoggedIn,
  };
}
