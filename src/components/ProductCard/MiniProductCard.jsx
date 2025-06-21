import styles from './MiniProductCard.module.css';
import removerImage from '@/assets/images/remover.jpg';

export default function MiniProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          src={removerImage.src}
          alt="Lash Remover"
          className={styles.image}
        />
        <div className={styles.title}>Lash Remover</div>
      </div>
    </div>
  );
}
