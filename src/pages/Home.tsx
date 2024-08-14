import React from "react";
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import {
  popularShows,
  apiKey,
  top_rated_shows,
  popular,
} from "../modules/ApiLinks";
import headerImage from "../assets/headerImage.jpg";

const Home = () => {
  return (
    <div>
      <CoverPage
        title={"testing"}
        description={"123"}
        catchPhrase={"456789"}
        headerImage={headerImage}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        itemHeading={"Popular Shows"}
        showButton={true}
        tvShowsOn={true}
        movieOn={false}
        numberOfMovies={5}
      />
      <DisplayItems
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`}
        itemHeading={"Top Rated Shows"}
        showButton={false}
        tvShowsOn={true}
        movieOn={false}
        numberOfMovies={5}
      />
      <DisplayItems
        apiEndpoint={`${popular}?api_key=${apiKey}`}
        itemHeading={"Popular Movies"}
        showButton={true}
        tvShowsOn={false}
        movieOn={true}
        numberOfMovies={5}
      />
    </div>
  );
};

export default Home;
