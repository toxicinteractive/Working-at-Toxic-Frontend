import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { MediaContextProvider } from "./context/mediaContext";
import { Loading } from "./components/LoadingLayout";
import UpperNavbar from "./components/Navbar";

const Moviepage = lazy(() => import("./pages/Moviepage"));
const Tvpage = lazy(() => import("./pages/Tvpage"));
const InfoPage = lazy(() => import("./pages/InfoPage"));
const Search = lazy(() => import("./pages/Searchpage"));

export default function App() {
  return (
    <>
      <MediaContextProvider>
        <Suspense fallback={<Loading />}>
          <UpperNavbar />
          <Routes>
            <Route path='/' element={<Moviepage />} />
            <Route path='/tv-shows' element={<Tvpage />} />
            <Route path='/search' element={<Search />} />
            <Route path='/:id' element={<InfoPage />} />
            <Route path='/tv/:id' element={<InfoPage />} />
          </Routes>
        </Suspense>
      </MediaContextProvider>
    </>
  );
}
