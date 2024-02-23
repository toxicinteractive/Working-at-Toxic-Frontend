import { FC } from "react";
import { FaVideoSlash } from "react-icons/fa6";

const NoTvShowFound: FC = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center p-6"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <FaVideoSlash size={50} className="text-gold-900" />
      <h2 className="text-gold-900 font-bold">No TV Show Found!</h2>
    </div>
  );
};

export default NoTvShowFound;
