import MovieCard from "components/Card/MovieCard";
import Container from "components/Container/Container";
import { ITrendingMovie, MovieCardProps } from "global/types/types";
import { getYearFromDate } from "global/utils/utils";
import Slider from "react-slick";
import styles from "./MostPopular.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MostPopularProps = {
  movies: ITrendingMovie[];
};

const MostPopular = ({ movies }: MostPopularProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <h1>Most popular movies</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieCard
              rating={movie.vote_average.toFixed(1)}
              imageUrl={movie.poster_path}
              name={movie.title}
              year={getYearFromDate(movie.release_date)}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MostPopular;
