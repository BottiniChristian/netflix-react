import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeriesGallery from "./SeriesGallery";

const TVShows = () => {
  console.log("Rendering TVShows");
  return (
    <>
      <Navbar />
      <h2 className="text-white text-center my-4">Serie TV</h2>
      <SeriesGallery title="Trending Series" />
      <SeriesGallery title="Top Rated Series" />
      <SeriesGallery title="Action Series" />
      <Footer />
    </>
  );
};
export default TVShows;
