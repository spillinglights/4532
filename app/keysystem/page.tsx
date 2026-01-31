import React from 'react'
import styles from './keysystem.module.css'
import Navbar from '../components/Navbar'

export default function KeySystemPage(): React.JSX.Element {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Get Your <span className={styles.funText}>Exploitingis.FUN</span> Key
            </h1>
            <p className={styles.subtitle}>
              Choose your preferred method to get your Exploitingis.FUN script key.
            </p>
            <p className={styles.description}>
              Exploitingis.FUN is available for lifetime access!
            </p>
          </div>
        </section>

        <section className={styles.cardsSection} aria-labelledby="key-methods-title">
          <div className={styles.container}>
            <h2 className={styles.cardsSectionTitle} id="key-methods-title">
              Available Key Methods
            </h2>
            <p className={styles.cardsSectionSubtitle}>
              Each method is carefully designed to provide you with the best experience possible.
            </p>

            <div className={styles.cardsGrid} role="grid" aria-label="Key acquisition methods">
              <article className={`${styles.card} ${styles.recommended}`} role="gridcell" aria-labelledby="premium-title">
                <div className={styles.cardBadge} aria-label="Recommended option">RECOMMENDED</div>
                <div className={styles.cardIcon} aria-hidden="true">★</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="premium-title">Exploitingis.FUN | Premium</h3>
                  <ul className={styles.featuresList} aria-label="Premium features">
                    <li>Instant key delivery</li>
                    <li>Premium support</li>
                    <li>No Ads</li>
                  </ul>
                  <a
                    href="https://discord.gg/exploitingisfun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                    aria-label="Get Premium access via Discord"
                  >
                    Get Exploitingis.FUN | Premium
                  </a>
                  <p className={styles.helperText} aria-label="Additional premium information">Best value • No waiting time</p>
                </div>
              </article>

              <article className={styles.card} role="gridcell" aria-labelledby="workink-title">
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="workink-title">Work.Ink</h3>
                  <ul className={styles.featuresList} aria-label="Work.Ink features">
                    <li>12 hours access</li>
                    <li>100% free method</li>
                    <li>3 Checkpoints</li>
                  </ul>
                  <a
                    href="https://ads.luarmor.net/get_key?for=WorkInk-IggXmdgSootD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                    aria-label="Get free key via Work.Ink (external site)"
                  >
                    Get Free Key
                  </a>
                </div>
              </article>

              <article className={`${styles.card} ${styles.locked}`} role="gridcell" aria-labelledby="rinku-title" aria-disabled="true">
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="rinku-title">Rinku</h3>
                  <ul className={styles.featuresList} aria-label="Rinku features">
                    <li>12 hours access</li>
                    <li>100% free method</li>
                    <li>2 Checkpoints</li>
                  </ul>
                  <button
                    className={styles.secondaryButton}
                    disabled
                    aria-disabled="true"
                    aria-label="Rinku unavailable"
                  >
                    Unavailable
                  </button>
                  <div className={styles.unavailableTooltip} role="status" aria-hidden="true">Unavailable</div>
                </div>
              </article>

              <article className={styles.card} role="gridcell" aria-labelledby="lootlabs-title">
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="lootlabs-title">LootLabs</h3>
                  <ul className={styles.featuresList} aria-label="LootLabs features">
                    <li>12 hours access</li>
                    <li>100% free method</li>
                    <li>1 Checkpoint</li>
                  </ul>
                  <a
                    href="https://ads.luarmor.net/get_key?for=LootLabs-EmtKVZjpYZUJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                    aria-label="Get free key via LootLabs (external site)"
                  >
                    Get Free Key
                  </a>
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