import styles from "./style.module.css";

export default function Button({ text, linkUrl }) {
  return (
    <a href={linkUrl} target="blank">
      <button className={styles.btn}>{text}</button>
    </a>
  );
}
