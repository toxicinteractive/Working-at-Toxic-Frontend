import { Language } from "@/types/Language";
import { TvShowsResponse } from "@/types/TvShow";

export interface TvShowListProps {
  initialTvShows: TvShowsResponse;
  languages: Language[];
}
