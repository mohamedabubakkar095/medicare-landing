import React from 'react'
import { motion } from 'framer-motion'
import { FiActivity, FiHeart, FiPlusSquare, FiShield, FiFeather, FiSun } from 'react-icons/fi'
import styles from './TrustedBy.module.css'

const LOGOS = [
  { name: 'Pulseon', icon: FiActivity },
  { name: 'Heartly', icon: FiHeart },
  { name: 'Medix', icon: FiPlusSquare },
  { name: 'Shieldcare', icon: FiShield },
  { name: 'Featherwell', icon: FiFeather },
  { name: 'Sunmed', icon: FiSun },
]

export default function TrustedBy() {
  return (
    <section className={`section ${styles.trusted}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Trusted by 100+ global top companies</h2>
          <p>We partner with leading health organizations, delivering trusted care worldwide.</p>
        </motion.div>

        <div className={styles.logoGrid}>
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              className={styles.logoItem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <logo.icon />
              <span>{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
