let nearby = [
    { id: 1, name: "bulbasaur" },
    { id: 2, name: "squirtle" },
  ];
  
  export const getNearbyCards = async () => {
    return nearby;
  };
  
  export const claimCard = async (card: any) => {
    nearby = nearby.filter((c) => c.id !== card.id);
  };