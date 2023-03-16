import { Pokemon } from "@/interfaces";
import { pokemonAPI } from "@/services";

export const getPokemon = async (nameOrId: string) => {
  try {
    const {
      data: { id: pokemonId, name: name, stats, sprites },
    } = await pokemonAPI.get<Pokemon>(`/pokemon/${nameOrId}`);

    return {
      id: pokemonId,
      name,
      stats,
      sprites,
    };
  } catch (error) {
    return null;
  }
};
