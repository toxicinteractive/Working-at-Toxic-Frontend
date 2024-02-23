"use server";

import { Language } from "@/types/Language";

export async function fetchLanguages(): Promise<Language[]> {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGFiNTE0YmZiYzcxNTAxMThmZjNjMzFkYjA4NWE5ZiIsInN1YiI6IjY1ZDYxYjE2NjA5NzUwMDE4NTIzYWFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pwfLXGGoBtIn80onKsqK0LU-hQdk_964yoRR2M--75M`
  );
  headers.append("Content-Type", "application/json");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TV_SHOWS_BASE_URL}/3/configuration/languages`,
    { method: "GET", headers: headers }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch languages");
  }
  return res.json();
}
