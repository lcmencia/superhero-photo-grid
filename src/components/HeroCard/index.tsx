import { FC } from "react";
import styles from "./HeroCard.module.css";

interface HeroCardProps {
  name: string;
  description: string;
  imgUrl: string;
  url: string;
}

const HeroCard: FC<HeroCardProps> = ({ url, name, imgUrl, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <img src={imgUrl} alt={name} className={styles["card__img"]} />
      <div className={styles["card__content"]}>
        <h4 className="font-semibold">{name}</h4>
        <p className={styles["card__description"]}>{description}</p>
      </div>
    </a>
  );
};

export default HeroCard;
