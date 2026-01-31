import React from 'react'
import styles from './resellers.module.css'
import Navbar from '../components/Navbar'

export default function ResellersPage(): React.JSX.Element {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Resellers
            </h1>
            <p className={styles.subtitle}>
              Trusted partners providing exploitingis.FUN keys through secure and convenient channels.
            </p>
            <p className={styles.description}>
              Our authorized resellers offer reliable access to exploitingis.FUN with dedicated support and multiple payment options.
            </p>
          </div>
        </section>

        <section className={styles.cardsSection} aria-labelledby="resellers-title">
          <div className={styles.container}>
            <h2 className={styles.cardsSectionTitle} id="resellers-title">
              Authorized Resellers
            </h2>
            <p className={styles.cardsSectionSubtitle}>
              Choose from our verified partners for a seamless purchasing experience.
            </p>

            <div className={styles.cardsGrid} role="grid" aria-label="Authorized resellers">


              <article className={styles.card} role="gridcell" aria-labelledby="floodline-title">
                <div className={styles.cardIcon} aria-hidden="true">🔑</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="floodline-title">Floodline</h3>
                  <ul className={styles.featuresList} aria-label="Floodline features">
                    <li>Reliable service</li>
                    <li>Secure payments</li>
                    <li>Fast delivery</li>
                    <li>Verified reseller</li>
                  </ul>
                  <a
                    href="https://floodline.store/product/exploitingisfun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                    aria-label="Visit Floodline store"
                  >
                    Visit Floodline
                  </a>
                  <p className={styles.helperText} aria-label="Additional Floodline information">Trusted partner • Verified seller</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2025 exploitingis.FUN - All rights reserved.</p>
            <p className={styles.disclaimer}>
              This project is independently developed and is not affiliated with, endorsed by, or in any way officially connected with Roblox Corporation or Microsoft Corporation. All trademarks and registered trademarks are the property of their respective owners.
            </p>
            <p className={styles.educationalNote}>For educational purposes only.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
