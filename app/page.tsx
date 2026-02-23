import styles from './page.module.css'

export default function ShutdownPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          exploitingis<span className={styles.logoAccent}>.FUN</span>
        </h1>

        <div className={styles.section}>
          <p>
            <strong className={styles.bold}>Let&apos;s cut to the chase:</strong>{' '}
            exploitingis.FUN is no longer active. The website and all associated services
            have been permanently shut down.
          </p>
        </div>

        <div className={styles.section}>
          <p>
            The owner is no longer able to maintain exploitingis.FUN, as he has moved on
            to work with <strong className={styles.bold}>Rift</strong>, another script hub. With his
            attention and efforts now dedicated to that project, it was no longer possible
            to give exploitingis.FUN the time and care it deserved. Rather than letting the
            project stagnate, the decision was made to shut it down entirely.
          </p>
        </div>

        <div className={styles.section}>
          <p>
            We want to sincerely thank everyone who supported exploitingis.FUN over the
            years — the users, the community, and everyone who helped make it what it was.
            It was a great run, and we appreciate every single one of you.
          </p>
        </div>

        <div className={styles.signoff}>
          <p><strong className={styles.bold}>Thank you for everything,</strong></p>
          <p><strong className={styles.bold}>The exploitingis.FUN team.</strong></p>
        </div>
      </div>
    </main>
  )
}
