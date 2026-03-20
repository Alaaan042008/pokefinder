import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export function UserProvider({ children }: any) {
  const [cards, setCards] = useState<any[]>([]);
  const [coins, setCoins] = useState(100);

  const addCoins = useCallback((amount: number) => {
    setCoins((prev) => prev + amount);
  }, []);

  const spendCoins = useCallback((amount: number) => {
    setCoins((prev) => prev - amount);
  }, []);

  const addCard = useCallback(
    (card: any) => {
      setCards((prev) => {
        const exists = prev.find((c) => c.id === card.id && c.type === card.type);

        if (exists) {
          addCoins(5);
          return prev;
        }

        return [...prev, card];
      });
    },
    [addCoins]
  );

  const addCards = useCallback(
    (newCards: any[]) => {
      setCards((prev) => {
        const next = [...prev];
        let duplicateCount = 0;

        newCards.forEach((card) => {
          const exists = next.find((c) => c.id === card.id && c.type === card.type);
          if (exists) {
            duplicateCount += 1;
          } else {
            next.push(card);
          }
        });

        if (duplicateCount > 0) {
          addCoins(duplicateCount * 5);
        }

        return next;
      });
    },
    [addCoins]
  );

  const removeCard = useCallback((id: number | string) => {
    setCards((prev) => prev.filter((card) => card.id != id));
  }, []);

  return (
    <UserContext.Provider
      value={{
        cards,
        coins,
        addCard,
        addCards,
        removeCard,
        addCoins,
        spendCoins,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);