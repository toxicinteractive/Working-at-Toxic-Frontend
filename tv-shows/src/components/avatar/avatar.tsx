import environment from "@/utils/config/environment";
import Image from "next/image";
import { FC, memo, useEffect, useState } from "react";
import { AvatarProps } from "./avatar.types";
import avatar from "../../../public/avatar.svg";
const Avatar: FC<AvatarProps> = (props) => {
  const { additionalClasses, fileName } = props;
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
    <div className={`${additionalClasses} rounded-md overflow-hidden relative`}>
      <Image
        src={
          fileName ? `${environment.imagesUrl}/t/p/original${fileName}` : avatar
        }
        alt="tv show image"
        sizes="(max-width: 768px) 96px, (max-width: 1200px) 96px, 96px"
        fill={true}
        style={{ objectFit: "cover" }}
        {...(imageBlur
          ? {
              placeholder: "blur",
              blurDataURL: imageBlur,
            }
          : {})}
      />
    </div>
  );
};
export default memo(Avatar);
