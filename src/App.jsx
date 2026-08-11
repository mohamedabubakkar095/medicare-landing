import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Dashboard from './components/Dashboard/Dashboard'
import TrustedBy from './components/TrustedBy/TrustedBy'
import Consultants from './components/Consultants/Consultants'
import ConsultMap from './components/ConsultMap/ConsultMap'
import CTABanner from './components/CTABanner/CTABanner'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <TrustedBy />
        <Consultants />
        <ConsultMap />
        <CTABanner />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
