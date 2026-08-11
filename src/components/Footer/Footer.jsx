import React, { useState } from 'react'
import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import styles from './Footer.module.css'

const COLUMNS = [
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Features',
    links: ['Appointments', 'Messaging', 'Health tracking', 'Prescriptions'],
  },
  {
    title: 'Solutions',
    links: ['For patients', 'For clinics', 'For enterprises'],
  },
  {
    title: 'For Providers',
    links: ['Join network', 'Provider portal', 'Resources'],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoDot} />
              Medicare
            </a>
            <p>Subscribe for our newsletter to get updates on new features and health tips.</p>
            <form className={styles.subscribeForm} onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className={styles.srOnly}>Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
            {submitted && <p className={styles.confirm}>Thanks — you're subscribed.</p>}
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.col}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#home">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Medicare. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer"><FiTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><FiInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
