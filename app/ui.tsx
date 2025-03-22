"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "actions/movieAction";
import MovieCardList from "components/movie-card-list";

export default function UI() {
  return (
    <main className="mt-16">
      <MovieCardList />
    </main>
  );
}
