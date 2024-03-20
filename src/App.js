import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers.jsx"));


export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
