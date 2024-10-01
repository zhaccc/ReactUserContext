export type User = {
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
};

export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  updateFirstName: (firstName: string) => void;
  updateLastName: (lastName: string) => void;
  updateIsAdmin: (isAdmin: boolean) => void;
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
};
