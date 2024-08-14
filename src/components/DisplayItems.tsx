import React, { useState, useEffect } from "react";
import { MovieShowsWrapper } from "../style/Styles.modules";
import axios from "axios";
import { trending } from "../modules/ApiLinks";

//!type for api data
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;

  //for tv shows
  first_air_date: string;
  name: string;
}

interface DataProps {
  apiEndpoint: string;
  numberOfMovies: number;
  showButton: boolean;
  tvShowsOn: boolean;
  movieOn: boolean;
  itemHeading: string;
}
const DisplayItems: React.FC<DataProps> = (
  apiEndpoint,
  numberOfMovies,
  showButton,
  tvShowsOn,
  movieOn,
  itemHeading
) => {
  const [showItems, setShowItems] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  //pagination from the api

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${trending}?`, {
          params: {
            page: currentPage,
          },
        });
        const { results, total_pages } = response.data;
        setShowItems(results.slice(0, 16));
        setTotalPages(total_pages);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };
    fetchMovie();
  }, [currentPage]);

  //function to change the date format
  function getFormattedDate(dateString: string | number | Date) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;

    const date = new Date(dateString);
    return date.toLocaleString("en-Us", options);
  }
  return (
    <MovieShowsWrapper>
      <h1 style={{ position: "relative", top: "100px" }}>{itemHeading}</h1>
    </MovieShowsWrapper>
  );
};

export default DisplayItems;
