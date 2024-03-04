import { fetchTvShows } from "@/app/_actions/fetch-tv-shows";
import TvShowList from "@/components/tv-show-list/tv-show-list";
import { FC } from "react";
import { fetchLanguages } from "./_actions/fetch-languages";

const Home: FC = async () => {
  const tvShows = await fetchTvShows(1, "en", "asc");
  const languages = await fetchLanguages();
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <TvShowList initialTvShows={tvShows} languages={languages} />
    </div>
  );
};
export default Home;
