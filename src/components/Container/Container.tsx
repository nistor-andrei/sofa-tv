import styles from "./Container.module.css";

type ContainerProp = {
  children: JSX.Element;
};

const Container = ({ children }: ContainerProp) => (
  <section className={styles.container}>{children}</section>
);

export default Container;
