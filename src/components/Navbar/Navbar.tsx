import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navList = ["Home", "Movie", "Tv Show"];

  return (
    <nav className={styles.nav}>
      <Image src="/LogoSofa.svg" alt="logo" width={200} height={50} priority />
      <ul className={styles.navList}>
        {navList.map((nav, index) => (
          <li key={index}>{nav}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
