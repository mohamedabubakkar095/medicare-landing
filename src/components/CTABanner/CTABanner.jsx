import React from 'react'
import { motion } from 'framer-motion'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
          <div className={styles.content}>
            <h2>Bring your customer services to the next level of excellence.</h2>
            <button className={styles.ctaBtn}>Get Started</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
