"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const GoBackButton: FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center text-gold-900 border-2 rounded-full border-gold-900"
    >
      <IoMdArrowRoundBack size={24} />
    </button>
  );
};
export default GoBackButton;
