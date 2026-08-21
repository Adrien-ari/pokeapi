import styles from "../css/PokeCard.module.css";

export function PokeCard({ id, imageUrl, name }) {
  return (
    <article className={styles.card}>
      <div className={styles.number}>#{String(id).padStart(3, "0")}</div>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.image}
        />
      </div>
      <h2 className={styles.name}>
        {name}
      </h2>
    </article>
  );
}