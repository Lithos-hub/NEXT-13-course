const toggleFavourite = (id: number) => {
  let favourites: number[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  favourites.includes(id)
    ? (favourites = favourites.filter((value) => value !== id))
    : favourites.push(id);

  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const checkExistingPokemon = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favourites: number[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  return favourites.includes(id);
};

const pokemonsList = (): number[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favourites") || "[]");
};

export { toggleFavourite, checkExistingPokemon, pokemonsList };
