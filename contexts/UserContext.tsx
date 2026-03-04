import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: any) => {
  const [cards, setCards] = useState<any[]>([]);

  const addCard = (card: any) => {
    setCards((prev) => [...prev, card]);
  };

  return (
    <UserContext.Provider value={{ cards, addCard }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);