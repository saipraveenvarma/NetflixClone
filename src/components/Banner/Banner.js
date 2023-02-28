import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../request";
import "./Banner.css";

function Banner() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request);
      setSeries(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    };
    getData();
  }, []);

  console.log();
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${series?.backdrop_path}")`,
        backgroundPosition: "50% 10%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {series?.title || series.name || series?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{series?.overview}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;