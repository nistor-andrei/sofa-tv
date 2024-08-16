"use client";
import Backdrop from "components/Backdrop/Backdrop";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";
import Navbar from "components/Navbar/Navbar";
import { TRENDING_MOVIE_URL } from "global/enums/enums";
import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, isLoading, isValidating } = useSWR(TRENDING_MOVIE_URL, fetcher);
  const randomMovie =
    data?.results[Math.floor(Math.random() * 20)].backdrop_path;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        <>
          <Navbar />
        </>
      </Container>
      <Backdrop image={randomMovie} />
    </Suspense>
  );
};

export default Home;
