import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export function UserProvider({ children }: any) {

  const [cards, setCards] = useState<any[]>([]);
  const [coins, setCoins] = useState(100);

  const addCoins = (amount: number) => {
    setCoins(prev => prev + amount);
  };

  const spendCoins = (amount: number) => {
    setCoins(prev => prev - amount);
  };

  const addCard = (card: any) => {

    const exists = cards.find(c => c.id === card.id && c.type === card.type);

    if (exists) {
      addCoins(5);
      return;
    }

    setCards(prev => [...prev, card]);
  };

  const addCards = (newCards: any[]) => {

    newCards.forEach(card => {

      const exists = cards.find(c => c.id === card.id && c.type === card.type);

      if (exists) {
        addCoins(5);
      } else {
        setCards(prev => [...prev, card]);
      }

    });

  };

  const removeCard = (id: number | string) => {
    setCards(prev => prev.filter(card => card.id != id));
  };

  return (
    <UserContext.Provider value={{
      cards,
      coins,
      addCard,
      addCards,
      removeCard,
      addCoins,
      spendCoins
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);