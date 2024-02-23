"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import avatar from "../../../public/avatar.svg";
import styles from "./portrait-frame.module.css";
import useVisibility from "@/app/hooks/useVisibility";
import environment from "@/utils/config/environment";
import { PortraitFrameProps } from "./PortraitFrameProps.types";

const PortraitFrame: FC<PortraitFrameProps> = (props) => {
  const { fileName } = props;
  const { isVisible, elementRef } = useVisibility();
  const [imageBlur, setImageBlur] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageBlur = async () => {
      try {
        const response = await fetch(
          `${environment.imagesUrl}/t/p/original${fileName}`
        );
        const buffer = await response.arrayBuffer();
        const base64String = Buffer.from(buffer).toString("base64");
        setImageBlur(`data:image/png;base64,${base64String}`);
      } catch (error) {
        console.error("Error fetching image blur:", error);
      }
    };
    if (fileName) {
      fetchImageBlur();
    }
  }, [fileName]);

  return (
    <div className="flex justify-center items-center" ref={elementRef}>
      <div
        className={`relative w-80 h-96 rounded-md border-4 border-slate-400 ${
          isVisible ? styles.animation : ""
        } rounded-2xl overflow-hidden`}
        ref={elementRef}
      >
        <Image
          src={
            fileName
              ? `${environment.imagesUrl}/t/p/original${fileName}`
              : avatar
          }
          alt="tv show image"
          style={{ objectFit: "cover" }}
          layout="fill"
          priority
          {...(imageBlur
            ? {
                placeholder: "blur",
                blurDataURL: imageBlur,
              }
            : {})}
        />
      </div>
    </div>
  );
};
export default PortraitFrame;
