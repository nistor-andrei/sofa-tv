import styles from "./Loader.module.css";

interface ILoader {
  isLoading: boolean;
  children: React.ReactNode;
}
const Loader = ({ isLoading, children }: ILoader) => {
  if (isLoading) {
    return <div className={styles.loader} />;
  }
  console.log(isLoading);

  return <> {children}</>;
};

export default Loader;
