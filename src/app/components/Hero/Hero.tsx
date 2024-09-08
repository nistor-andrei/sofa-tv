import { FC } from "react";
import styles from "./Hero.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Button from "components/Button/Button";
import { ITrendingMovie } from "global/types/types";
import { getYearFromDate } from "global/utils/utils";

type HeroProps = {
  movieDetails: ITrendingMovie;
};

const Hero: FC<HeroProps> = ({ movieDetails }) => {
  const year = getYearFromDate(movieDetails.release_date);
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{movieDetails.title}</h1>
      <div className={styles.details}>
        <div className={styles.details_sub}>
          <FaRegCalendarAlt />
          <p>{year}</p>
        </div>
        <div className={styles.details_sub}>
          <FaStar color="#FFBB00" />
          <p>{movieDetails.vote_average.toFixed(1)}</p>
        </div>
      </div>
      <p className={styles.overview}>{movieDetails.overview}</p>
      <Button text="Watch" />
    </section>
  );
};

export default Hero;
