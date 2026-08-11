import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>Best Healthcare Solutions</span>
          <h1 className={styles.heading}>
            Get Premium <span className={styles.highlight}>medical care</span> for your best health
          </h1>
          <p className={styles.subtext}>
            We connect you with experienced, certified doctors so you get trusted
            advice and personalized treatment plans from home.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
              alt="Friendly doctor with stethoscope, ready for consultation"
            />
          </div>

          <motion.div
            className={`${styles.floatCard} ${styles.floatTop}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={styles.floatAvatar}>MC</div>
            <div>
              <p className={styles.floatTitle}>Medicare</p>
              <span className={styles.floatSub}>Trusted care partner</span>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.floatCard} ${styles.floatBottom}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <FiCheckCircle className={styles.floatIcon} />
            <div>
              <p className={styles.floatTitle}>Appointment set</p>
              <span className={styles.floatSub}>with Dr. Sathiya</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
