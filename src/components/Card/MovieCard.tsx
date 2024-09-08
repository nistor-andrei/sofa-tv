import React, { FC } from "react";
import Image from "next/image";
import styles from "./MovieCard.module.css";
import { MovieCardProps } from "global/types/types";

const MovieCard: FC<MovieCardProps> = ({ rating, imageUrl, name, year }) => {
  return (
    <article className={styles.movieCard}>
      <div className={styles.imageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          alt={name}
          width={180}
          height={270}
          className={styles.movieImage}
          layout="responsive"
        />
        <div className={styles.ratingBadge}>
          <span>⭐ {rating}</span>
        </div>
      </div>
      <div className={styles.movieDetails}>
        <h3 className={styles.movieTitle}>{name}</h3>
        <time className={styles.movieYear}>{year}</time>
      </div>
    </article>
  );
};

export default MovieCard;
