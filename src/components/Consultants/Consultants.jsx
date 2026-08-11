import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from './Consultants.module.css'

const CONSULTANTS = [
  {
    name: 'Miles Carter',
    role: 'Medical Specialist',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Nguyen Le',
    role: 'Cardiologist',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Florence Ray',
    role: 'Skin Consultant',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Consultants() {
  return (
    <section id="consultants" className={`section ${styles.consultants}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <h2>Collaborate with our best consultants online</h2>
        </motion.div>

        <div className={styles.grid}>
          {CONSULTANTS.map((person, i) => (
            <motion.div
              key={person.name}
              className={styles.card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <img src={person.img} alt={`Portrait of ${person.name}, ${person.role}`} className={styles.avatar} />
              <h4>{person.name}</h4>
              <span className={styles.role}>{person.role}</span>
              <p>Offers program-focused care with patients using flexible online scheduling.</p>
              <button className={styles.linkBtn} aria-label={`Book consultation with ${person.name}`}>
                <FiArrowUpRight />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.footerNote}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <p>
            Patients can consult with healthcare providers from the comfort of their homes,
            eliminating travel time and costs, reducing waiting times.
          </p>
          <button className={styles.primaryBtn}>Get Started</button>
        </motion.div>
      </div>
    </section>
  )
}
