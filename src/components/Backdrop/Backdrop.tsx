import Image from "next/image";
import styles from "./Backdrop.module.css";
import { Suspense } from "react";

interface IBackdrop {
  image: string;
}

const Backdrop = ({ image }: IBackdrop) => (
  <>
    <Image
      src={`https://image.tmdb.org/t/p/original/${image}`}
      fill={true}
      alt="background-image"
      quality={100}
      className={styles.backgroundImage}
    />
    <div className={styles.gradientOverlay}></div>
  </>
);

export default Backdrop;
