"use server";
import axios from "axios";
import AnimeCard, { AnimeProp } from "../components/AnimeCard";

// Todo codigo escrito nesse arquivo será executado como uma Server Action

export const fecthAnime = async (page: number) => {
  // Fazer chamada para API e retornar os dados
  try {
    const response = await axios.get(
      `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
    );

    return response.data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ));
  } catch (error) {
    return <h2 className="text-3xl font-extrabold text-red-500">Deu Erro</h2>;
  }
};
