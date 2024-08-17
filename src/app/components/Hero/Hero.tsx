import { FC } from "react";
import styles from "./Hero.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

type HeroProps = {
  movieDetails: ITrendingMovie;
};

const Hero: FC<HeroProps> = ({ movieDetails }) => {
  const year = movieDetails.release_date.split("-")[0];
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
    </section>
  );
};

export default Hero;
