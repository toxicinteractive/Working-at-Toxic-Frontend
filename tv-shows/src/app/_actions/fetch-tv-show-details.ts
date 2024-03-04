"use server";

import { TvShowDetails } from "@/types/TvShow";

export async function fetchTvShowDetails(id: string): Promise<TvShowDetails> {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGFiNTE0YmZiYzcxNTAxMThmZjNjMzFkYjA4NWE5ZiIsInN1YiI6IjY1ZDYxYjE2NjA5NzUwMDE4NTIzYWFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwfLXGGoBtIn80onKsqK0LU-hQdk_964yoRR2M--75M`
  );
  headers.append("Content-Type", "application/json");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TV_SHOWS_BASE_URL}/3/tv/${id}`,
    { method: "GET", headers: headers }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tv shows");
  }
  return res.json();
}
