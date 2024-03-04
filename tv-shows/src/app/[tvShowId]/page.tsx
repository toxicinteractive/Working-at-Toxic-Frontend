import CircularProgressIndicator from "@/components/circular-progress-indicator/circular-progress-indicator";
import PortraitFrame from "@/components/portrait-frame/portrait-frame";
import Season from "@/components/season/season";
import React from "react";
import { fetchTvShowDetails } from "../_actions/fetch-tv-show-details";
import GoBackButton from "@/components/go-back-button/go-back-button";

const TvShowDetailsPage = async ({
  params,
}: {
  params: { tvShowId: string };
}) => {
  const tvShow = await fetchTvShowDetails(params.tvShowId);
  const tvShowGender = tvShow?.genres?.map((el) => el.name);
  const createBy = tvShow?.created_by?.map((el) => el.name);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-9">
      <div className="col-span-1 flex flex-col gap-4 items-center justify-center max-h-screen ">
        <GoBackButton />
        <PortraitFrame fileName={tvShow.backdrop_path} />
      </div>
      <div className="col-span-2 flex flex-col justify-center max-w-2xl xl:max-w-full gap-4 h-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gold-900 sm:text-5xl">
          {tvShow.name}
        </h2>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-tight text-gold-600 sm:text-md">
            rate :
          </h2>
          <CircularProgressIndicator rate={tvShow.vote_average} />
        </div>
        <p className="text-lg leading-8 text-gray-300">{tvShow.overview}</p>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-tight text-gold-600 sm:text-md">
            created by :
          </h2>
          {createBy.map((item, index) => (
            <React.Fragment key={item}>
              <div className="text-xs text-slate-400 font-bold truncate">
                {item}
              </div>
              {index !== tvShowGender.length - 1 && (
                <span className="text-xs text-slate-400 font-bold">, </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-tight text-gold-600 sm:text-md">
            Gender :
          </h2>
          <div className="flex items-center gap-2">
            {tvShowGender.map((item, index) => (
              <React.Fragment key={item}>
                <div className="text-xs text-slate-400 font-bold truncate">
                  {item}
                </div>
                {index !== tvShowGender.length - 1 && (
                  <span className="text-xs text-slate-400 font-bold">, </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {tvShow.seasons?.map?.((season) => (
            <Season key={season.id} season={season} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShowDetailsPage;
