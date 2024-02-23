import { FC, memo } from "react";
import { CircularProgressIndicatorProps } from "./circular-progress-indicator.types";

const CircularProgressIndicator: FC<CircularProgressIndicatorProps> = (
  props
) => {
  const { rate } = props;

  const circumference = 2 * Math.PI * 15.9155;
  const strokeDashoffset = rate && circumference * (1 - rate / 10);
  const formattedRate =
    rate &&
    rate.toLocaleString("en", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    });

  return (
    <div className="relative w-12 h-12 ">
      <svg viewBox="0 0 36 36" className="absolute top-0 left-0 w-full h-full">
        <circle
          className="circle-bg"
          cx="18"
          cy="18"
          r="15.9155"
          fill="transparent"
          stroke="#eef2ff"
          strokeWidth="2"
        ></circle>
        <circle
          className="circle-fill"
          cx="18"
          cy="18"
          r="15.9155"
          fill="transparent"
          {...(formattedRate
            ? {
                stroke:
                  +formattedRate > 5
                    ? "#10b981"
                    : +formattedRate < 5
                    ? "#f43f5e"
                    : "#ffa500",
              }
            : {})}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        ></circle>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
        {`${formattedRate}%`}
      </div>
    </div>
  );
};
export default memo(CircularProgressIndicator);
