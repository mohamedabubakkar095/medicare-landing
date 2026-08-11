import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiShield, FiActivity, FiCalendar } from 'react-icons/fi'
import styles from './ConsultMap.module.css'

const FEATURES = [
  { icon: FiHeart, label: 'Personalized Health Assessment' },
  { icon: FiShield, label: 'Patient Education' },
  { icon: FiActivity, label: 'Integration with Pharmacy Services' },
  { icon: FiActivity, label: 'At-Home Health Monitoring' },
  { icon: FiCalendar, label: 'Emergency Contact Finder' },
  { icon: FiCalendar, label: 'Health Tracking' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ConsultMap() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.mapMock}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          aria-hidden="true"
        >
          <svg viewBox="0 0 320 240" className={styles.mapSvg}>
            <rect width="320" height="240" rx="24" fill="var(--color-bg-soft)" />
            <path d="M20 60 L120 40 L200 70 L300 30" stroke="var(--color-border)" strokeWidth="2" fill="none" />
            <path d="M10 140 L100 160 L220 130 L310 170" stroke="var(--color-border)" strokeWidth="2" fill="none" />
            <path d="M40 20 L60 220" stroke="var(--color-border)" strokeWidth="2" fill="none" />
            <path d="M240 10 L260 230" stroke="var(--color-border)" strokeWidth="2" fill="none" />
            <circle cx="160" cy="120" r="10" fill="var(--color-primary)" />
            <circle cx="160" cy="120" r="18" fill="var(--color-primary)" opacity="0.25" />
          </svg>
          <div className={styles.mapBtn}>Find a doctor near you</div>
        </motion.div>

        <motion.div
          className={styles.featuresPanel}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <h3>Additional Medical Features</h3>
          <ul className={styles.featureList}>
            {FEATURES.map((f) => (
              <li key={f.label}>
                <f.icon />
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
          <button className={styles.primaryBtn}>See all</button>
        </motion.div>
      </div>
    </section>
  )
}
