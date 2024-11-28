import MovieCard from "components/Card/MovieCard";
import { ITrendingMovie } from "global/types/types";
import { getYearFromDate } from "global/utils/utils";
import Slider from "react-slick";
import styles from "./MostPopular.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MostPopularProps = {
  movies: ITrendingMovie[];
  isLoading: boolean;
  title: string;
};

const MostPopular = ({ movies, isLoading, title }: MostPopularProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <h1>{title}</h1>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              rating={movie.vote_average.toFixed(1)}
              imageUrl={movie.poster_path}
              name={movie.title}
              year={getYearFromDate(movie.release_date ?? movie.first_air_date)}
              isLoading={isLoading}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MostPopular;
