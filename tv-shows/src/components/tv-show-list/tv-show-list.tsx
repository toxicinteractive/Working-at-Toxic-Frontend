"use client";

import { fetchTvShows } from "@/app/_actions/fetch-tv-shows";
import { TvShowResponse } from "@/types/TvShow";
import { FC, memo, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../loader/loader";
import NoTvShowFound from "../no-tv-show-found/no-tv-show-found";
import SearchField from "../search-field/search-field";
import SelectLanguage from "../select-language/select-language";
import TvShow from "../tv-show/tv-show";
import { TvShowListProps } from "./tv-show-list.types";
const TvShowList: FC<TvShowListProps> = (props) => {
  const { initialTvShows, languages } = props;
  const [dataSource, setDataSource] = useState<TvShowResponse[]>(
    initialTvShows.results
  );
  const [paginator, setPaginator] = useState({
    page: 1,
    total: initialTvShows.total_results,
  });
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [paramToSearch, setParamToSearch] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };
  const handleToggleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };
  const fetchMoreData = async () => {
    const nextPage = paginator.page + 1;
    const newTvShows = await fetchTvShows(nextPage, selectedLanguage, order);
    setDataSource((prevItems) => [...prevItems, ...newTvShows?.results]);
    setPaginator((prevPaginator) => ({
      ...prevPaginator,
      page: nextPage,
    }));
  };
  useEffect(() => {
    const fetchNewTvShows = async () => {
      const newTvShows = await fetchTvShows(1, selectedLanguage, order);
      setPaginator((prevPaginator) => ({
        ...prevPaginator,
        page: 1,
        total: newTvShows.total_results,
      }));
      setDataSource(newTvShows?.results);
    };
    fetchNewTvShows();
  }, [selectedLanguage, order]);
  useEffect(() => {
    const fetchNewTvShows = async () => {
      const newTvShows = await fetchTvShows(1, selectedLanguage, order);
      const filteredData = newTvShows.results.filter((tvShow) =>
        tvShow.original_name.toLowerCase().includes(paramToSearch.toLowerCase())
      );

      setPaginator((prevPaginator) => ({
        ...prevPaginator,
        page: 1,
        total: newTvShows.total_results,
      }));
      setSelectedLanguage("en");
      setDataSource(filteredData);
    };
    fetchNewTvShows();
  }, [paramToSearch]);
  return (
    <div className="flex flex-col justify-center">
      <div className="sticky top-0 left-0 z-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <SearchField
          id={"search_field"}
          name={"search_field"}
          placeholder={"Search tv show..."}
          setParamToSearch={setParamToSearch}
        />
        <SelectLanguage
          options={languages}
          value={selectedLanguage}
          handleLanguageChange={handleLanguageChange}
          handleToggleOrder={handleToggleOrder}
        />
      </div>
      {dataSource.length === 0 ? (
        <NoTvShowFound />
      ) : (
        // <div className="h-[calc(100vh_-_5.5rem)] md:h-[calc(100vh_-_2rem)]">
        <InfiniteScroll
          dataLength={dataSource?.length}
          next={fetchMoreData}
          hasMore={dataSource?.length < paginator.total}
          loader={<Loader />}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          // style={{height:"calc(100vh - 3rem)"}}
        >
          {dataSource?.map?.((tvShow, index) => (
            <TvShow key={`${tvShow.id}${index}`} tvShow={tvShow} />
          ))}
        </InfiniteScroll>
        // </div>
      )}
    </div>
  );
};
export default memo(TvShowList);
