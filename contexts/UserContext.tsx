import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export function UserProvider({ children }: any) {

  const [cards, setCards] = useState<any[]>([]);

  const addCard = (card: any) => {
    setCards(prev => [...prev, card]);
  };

  const addCards = (newCards: any[]) => {
    setCards(prev => [...prev, ...newCards]);
  };

  const removeCard = (id: number | string) => {
    setCards(prev => prev.filter(card => card.id != id));
  };

  return (
    <UserContext.Provider value={{ cards, addCard, addCards, removeCard }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);