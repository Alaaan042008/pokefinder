let market: any[] = [
    { id: "1", name: "pikachu", price: 50 },
    { id: "2", name: "charizard", price: 200 },
  ];
  
  export const getMarket = async () => {
    return market;
  };
  
  export const buyCard = async (item: any) => {
    market = market.filter((i) => i.id !== item.id);
  };