"use client";
import { FC, memo } from "react";
import { TvShowProps } from "./tv-show.types";
import Avatar from "../avatar/avatar";
import CircularProgressIndicator from "../circular-progress-indicator/circular-progress-indicator";
import { useRouter } from "next/navigation";

const TvShow: FC<TvShowProps> = (props) => {
  const { tvShow } = props;
  const router = useRouter();

  const handleDisplayTvShowDetails = () => {
    router.push(`/${tvShow.id}`);
  };

  return (
    <div
      role="button"
      className={`group flex items-center rounded-md gap-4 m-2 px-2 py-3 ${"bg-gray-900"} hover:bg-gray-800 h-28`}
      onClick={handleDisplayTvShowDetails}
    >
      <Avatar additionalClasses="h-24 w-24" fileName={tvShow.backdrop_path} />
      <div className="flex flex-col flex-1 min-w-0 gap-2">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gold-600 truncate">
            {tvShow?.original_name}
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-xs text-white truncate">{tvShow?.overview}</div>
          <div className="hidden group-hover:flex ">
            <CircularProgressIndicator rate={tvShow.vote_average} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(TvShow);
