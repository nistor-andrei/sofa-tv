import styles from "./Button.module.css";

interface IButton {
  text: string;
  onClick?: Function;
}

const Button = ({ text, onClick }: IButton) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
