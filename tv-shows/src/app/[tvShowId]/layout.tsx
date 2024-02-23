import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "TV show | TV show details",
  description: "TV show details",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 overflow-y-auto min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {children}
    </div>
  );
}
