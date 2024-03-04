"use server";

import { TvShowsResponse } from "@/types/TvShow";

export async function fetchTvShows(
  page: number = 1,
  language: string = "",
  order: "asc" | "desc" = "asc"
): Promise<TvShowsResponse> {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGFiNTE0YmZiYzcxNTAxMThmZjNjMzFkYjA4NWE5ZiIsInN1YiI6IjY1ZDYxYjE2NjA5NzUwMDE4NTIzYWFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwfLXGGoBtIn80onKsqK0LU-hQdk_964yoRR2M--75M`
  );
  headers.append("Content-Type", "application/json");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TV_SHOWS_BASE_URL}/3/discover/tv?page=${page}&with_original_language=${language}&sort_by=first_air_date.${order}`,
    { method: "GET", headers: headers }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tv shows");
  }
  return res.json();
}
