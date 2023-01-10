import { createSelector } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import md5 from "md5";
import { Hero } from "../../types/Hero";

interface ResponseData {
  data: {
    count: number;
    limit: number;
    total: number;
    results: Hero[];
  };
}

export const heroesApi = createApi({
  reducerPath: "heroesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getHeroes: builder.query<ResponseData, void>({
      query: () => {
        // Url format as specified in https://developer.marvel.com/documentation/authorization

        const now = Date.now();
        const hashString = md5(
          now.toString() +
            process.env.NEXT_PUBLIC_API_SECRET +
            process.env.NEXT_PUBLIC_API_PUBLIC
        );

        return (
          `/v1/public/characters` +
          `?ts=${now}&apikey=${process.env.NEXT_PUBLIC_API_PUBLIC}&hash=${hashString}`
        );
      },
    }),
  }),
});

export const selectHeroes = createSelector(
  () => {
    return heroesApi.endpoints.getHeroes.useQuery();
  },
  (query) => {
    console.log(query);

    return query;
  }
);

export const { useGetHeroesQuery } = heroesApi;
