import React from 'react'
import { motion } from 'framer-motion'
import { FiPackage, FiGlobe, FiCompass } from 'react-icons/fi'
import styles from './Dashboard.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const SERVICE_CARDS = [
  {
    icon: FiPackage,
    title: 'Online Prescription Services',
    text: 'Facilitate easy ordering',
    tone: 'light',
  },
  {
    icon: FiGlobe,
    title: 'Online global service',
    text: 'We provide from any country',
    tone: 'primary',
  },
  {
    icon: FiCompass,
    title: 'Explore more amazing services',
    text: '',
    tone: 'pink',
  },
]

export default function Dashboard() {
  return (
    <section id="services" className={`section ${styles.dashboard}`}>
      <div className="container">
        <motion.div
          className={styles.panel}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className={styles.panelText}>
            <h3>Personal Health Dashboard &amp; Appointment Booking System</h3>
            <p>
              Track vitals, manage prescriptions, and schedule visits with your
              care team, all from one connected dashboard.
            </p>
          </div>
          <div className={styles.chartMock} aria-hidden="true">
            <div className={styles.chartHeader}>
              <span>Dr. Thomas</span>
              <span className={styles.chartBadge}>Live</span>
            </div>
            <svg viewBox="0 0 220 90" className={styles.chartSvg}>
              <polyline
                points="0,70 30,55 60,60 90,30 120,42 150,18 180,26 220,8"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        <div className={styles.serviceGrid}>
          {SERVICE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className={`${styles.serviceCard} ${styles[card.tone]}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
            >
              <card.icon className={styles.serviceIcon} />
              <h4>{card.title}</h4>
              {card.text && <p>{card.text}</p>}
              {card.tone === 'pink' && <button className={styles.serviceBtn}>Explore now</button>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
