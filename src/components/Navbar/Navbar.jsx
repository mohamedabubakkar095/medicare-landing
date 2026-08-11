import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#consultants' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoDot} />
          Medicare
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href="#contact" className={styles.loginLink}>Login</a>
            <button className={styles.ctaBtn}>Get Started</button>
          </div>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {theme === 'light' ? <FiMoon size={17} /> : <FiSun size={17} />}
            </motion.span>
          </button>
          <a href="#contact" className={styles.loginLink}>Login</a>
          <button className={styles.ctaBtn}>Get Started</button>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
