"use client";
import Backdrop from "components/Backdrop/Backdrop";
import Container from "components/Container/Container";
import Navbar from "components/Navbar/Navbar";
import { TRENDING_MOVIE_URL } from "global/enums/enums";
import { Suspense } from "react";
import useSWR from "swr";
import Hero from "./components/Hero/Hero";
import Loader from "components/Loader/Loader";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data } = useSWR<ITrendingMovieRecord>(TRENDING_MOVIE_URL, fetcher, {
    revalidateOnFocus: false,
  });
  const randomMovie = data?.results[Math.floor(Math.random() * 20)];

  if (!randomMovie) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        <>
          <Navbar />
          <Hero movieDetails={randomMovie} />
        </>
      </Container>
      <Backdrop image={randomMovie?.backdrop_path ?? ""} />
    </Suspense>
  );
};

export default Home;
