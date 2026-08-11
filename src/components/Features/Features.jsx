import React from 'react'
import { motion } from 'framer-motion'
import { FiSmartphone, FiLock } from 'react-icons/fi'
import styles from './Features.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Features() {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>Features</span>
          <h2>Discover Our Benefits &amp; Features</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={`${styles.card} ${styles.cardApp}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <FiSmartphone className={styles.icon} />
            <h3>Mobile Health App</h3>
            <p>Tools for patients to track symptoms, medications and daily vitals from anywhere.</p>
            <div className={styles.phoneMock} aria-hidden="true">
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <span className={styles.phoneAvatar} />
                  <span className={styles.phoneName}>Hi, Nadha</span>
                </div>
                <div className={styles.phoneChart} />
                <div className={styles.phonePill} />
                <div className={styles.phonePill} style={{ width: '60%' }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardSecure}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <FiLock className={styles.icon} />
            <h3>Secure Messaging System</h3>
            <p>HIPAA-compliant platforms for private conversations with your care provider.</p>
            <div className={styles.chatMock} aria-hidden="true">
              <div className={styles.chatBubbleLeft}>Hi Dr. Thomas, how are you?</div>
              <div className={styles.chatBubbleRight}>Doing great! And you?</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
