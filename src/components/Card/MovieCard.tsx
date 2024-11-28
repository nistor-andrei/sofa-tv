import React, { FC } from "react";
import Image from "next/image";
import styles from "./MovieCard.module.css";
import { MovieCardProps } from "global/types/types";
import { ImageLoader } from "./ImageLoader";

const MovieCard: FC<MovieCardProps> = ({
  rating,
  imageUrl,
  name,
  year,
  isLoading,
}) => {
  return (
    <article className={styles.movieCard}>
      <div className={styles.imageContainer}>
        <ImageLoader isLoading={isLoading}>
          <>
            <Image
              src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
              alt={name}
              width={180}
              height={270}
              className={styles.movieImage}
              priority
            />
          </>
        </ImageLoader>
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
