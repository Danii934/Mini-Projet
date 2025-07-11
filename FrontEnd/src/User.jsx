import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const connexion = (userData) => {
    setUser(userData);
  };

  const inscription = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, connexion, inscription }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
