"use client";
import { FC, memo } from "react";

import Avatar from "../avatar/avatar";
import CircularProgressIndicator from "../circular-progress-indicator/circular-progress-indicator";
import { SeasonProps } from "./season.types";

const Season: FC<SeasonProps> = (props) => {
  const { season } = props;

  return (
    <div
      role="button"
      className={`flex items-center rounded-md gap-4 m-2 px-2 py-3 ${"bg-gray-900"} hover:bg-gray-800 h-28`}
    >
      <Avatar additionalClasses="h-24 w-24" fileName={season?.poster_path} />
      <div className="flex flex-col flex-1 min-w-0 gap-2">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gold-600 truncate">
            Season name: {season?.name}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xs text-white truncate">
            Episodes: {season?.episode_count}
          </div>

          <CircularProgressIndicator rate={season.vote_average} />
        </div>
      </div>
    </div>
  );
};
export default memo(Season);
