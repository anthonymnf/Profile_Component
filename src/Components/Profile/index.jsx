import styles from "./style.module.css";
import Button from "../Button";
export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  return (
    <div>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <h1>
        <b>{name}</b>
      </h1>
      <hr />
      <p>{bio}</p>
      <hr />
      <p>{phone}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <div className={styles.divBtn}>
        <Button text="GitHub" linkUrl={githubUrl} />
        <Button text="Linkedin" linkUrl={linkedinUrl} />
        <Button text="Twitter" linkUrl={twitterUrl} />
      </div>
    </div>
  );
}
