import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IApiResponse, IApiResponseSingle } from "./types/Api";

//  My Token.
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTBhMmI2OWIwMjM5MjU5Y2M1N2UyYjQzOGZlMDA1OSIsInN1YiI6IjYzY2E3OTg5YmIwNzBkMDA4MTgzZDBhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPHmjM-uRqQuwRKBbrZpPyvgoeke4H_ccZFs37MsPwQ";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      if (apiToken) {
        headers.set("authorization", `Bearer ${apiToken}`);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({
    // Movies service
    getMovies: build.query<IApiResponse, void>({
      query: () => "/discover/movie",
      providesTags: ["Movie"] as any,
    }),
    // getsingle Movie service
    getMovie: build.query<IApiResponseSingle, any>({
      query: (id) => "/movie/" + id,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = api;
export default api;
