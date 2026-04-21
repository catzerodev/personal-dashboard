const statNameMap = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

export const displayStatName = (name) => {
  return statNameMap[name] || name;
};