"use client";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.6, ease: "easeInOut" }}
      >
        <motion.div
          iinitial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.6, ease: "easeInOut" }}
        >
          <Logo />
        </motion.div>

        <motion.p
          className={styles.textBlock}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.6, ease: "easeInOut" }}
        >
          Diventa una <span className={styles.underline}>Lashmaker</span> di successo
          co la nostra <span className={styles.underline}>formazione</span>{' '}
          professionale e i <span className={styles.underline}>prodotti</span>{' '}
          ricercati di altissima qualità ;)
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.6, ease: "easeInOut" }}
        >
          <Link href="#courses" className={styles.buttonPink}>
            Corsi
          </Link>
          <Link href="#products" className={styles.buttonWhite}>
            Prodotti
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
