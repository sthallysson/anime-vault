"use server";
import axios from "axios";
import AnimeCard, { AnimeProp } from "../components/AnimeCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Todo codigo escrito nesse arquivo será executado como uma Server Action

export const fecthAnime = async (page: number) => {
  // Fazer chamada para API e retornar os dados

  const response = await axios.get(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  return response.data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
