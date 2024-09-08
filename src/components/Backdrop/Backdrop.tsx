import Image from "next/image";
import styles from "./Backdrop.module.css";
import { Suspense } from "react";

interface IBackdrop {
  image: string;
}

const Backdrop = ({ image }: IBackdrop) => (
  <div className={styles.container}>
    <Image
      src={`https://image.tmdb.org/t/p/original/${image}`}
      fill
      alt="background-image"
      quality={100}
      className={styles.backgroundImage}
    />
    <div className={styles.gradientOverlay}></div>
  </div>
);

export default Backdrop;
