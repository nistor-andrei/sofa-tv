"use client";
import Backdrop from "components/Backdrop/Backdrop";
import Container from "components/Container/Container";
import Navbar from "components/Navbar/Navbar";
import { TRENDING_MOVIE_URL, TRENDING_TV_SHOW } from "global/enums/enums";
import { Suspense } from "react";
import useSWR from "swr";
import Hero from "./components/Hero/Hero";
import MostPopular from "./components/MostPopular/MostPopular";
import { ITrendingMovieRecord } from "global/types/types";
import styles from "./page.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, isLoading } = useSWR<ITrendingMovieRecord>(
    TRENDING_MOVIE_URL,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const { data: dataTvShow, isLoading: isLoadingTvShow } =
    useSWR<ITrendingMovieRecord>(TRENDING_TV_SHOW, fetcher, {
      revalidateOnFocus: false,
    });

  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = data?.results[randomNumber];

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar />
      {data && randomMovie && dataTvShow && (
        <>
          <div className={styles.container}>
            <Backdrop image={randomMovie?.backdrop_path ?? ""} />
            <Container>
              <>
                <Hero movieDetails={randomMovie} />
              </>
            </Container>
          </div>
          <MostPopular
            movies={data.results}
            isLoading={isLoading}
            title="Most popular movies"
          />
          <MostPopular
            movies={dataTvShow.results}
            title="Most popular TV shows"
            isLoading={isLoadingTvShow}
          />
        </>
      )}
    </Suspense>
  );
};

export default Home;
