'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { EmblaCarousel } from './components/Carousel'

interface Game {
    id: string
    name: string
    image: string
    status: string
}

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "How does the key system work?",
        answer: "Our key system requires you to complete simple tasks to obtain a key that lasts for 12 hours. Once you have a valid key, you can use our scripts without interruption during that period."
    },
    {
        question: "Are the scripts safe to use?",
        answer: "Yes, all our scripts are thoroughly tested and designed to minimize detection. However, we always recommend using an alt account and following safe practices."
    },
    {
        question: "How often are scripts updated?",
        answer: "We update our scripts regularly to ensure compatibility with game updates. Most scripts receive updates within 24-48 hours of a game patch."
    },
    {
        question: "What executors are supported?",
        answer: "Our scripts support most popular executors including Solara, Wave, and other Level 8 executors. Check our Discord for the full compatibility list."
    },
    {
        question: "How do I get support if something doesn't work?",
        answer: "Join our Discord server for real-time support. Our community and staff are always ready to help you with any issues you encounter."
    }
]

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [games, setGames] = useState<Game[]>([])
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        const fetchGames = async () => {
            try {
                const response = await fetch('/games.json')
                const gamesData = await response.json()
                setGames(gamesData)
            } catch (error) {
                console.error(error)
            }
        }

        checkMobile()
        fetchGames()
        window.addEventListener('resize', checkMobile)
        setIsLoaded(true)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    const generateGameCard = (game: Game) => (
        <article className={styles.gameCard} key={game.id} role="article" aria-labelledby={`game-title-${game.id}`}>
            <div className={styles.gameIcon}>
                <img
                    src={game.image}
                    alt={`${game.name} game thumbnail`}
                    loading="lazy"
                    decoding="async"
                />
                <div className={styles.gameInfoOverlay}>
                    <h3 className={styles.gameTitle} id={`game-title-${game.id}`}>{game.name}</h3>
                    <span
                        className={styles.gameStatusOperational}
                        role="status"
                        aria-label={`Game status: ${game.status}`}
                    >
                        <span className={styles.statusDot} aria-hidden="true"></span>
                        {game.status.charAt(0).toUpperCase() + game.status.slice(1)}
                    </span>
                </div>
            </div>
        </article>
    )

    const gameCards = games.map(generateGameCard)

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.brandName}>
                    <span className={styles.brandExploiting}>exploitingis</span>
                    <span className={styles.brandFun}>.FUN</span>
                </h1>
            </header>

            <nav className={styles.nav}>
                <div className={styles.navPill}>
                    <a href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                        </svg>
                        HOME
                    </a>
                    <a href="/keysystem" className={styles.navLink}>
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                        </svg>
                        GET KEY
                    </a>
                    <a href="#games" className={styles.navLink}>
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 18l2-2v-6l-2-2H8l-2 2v6l2 2h8z" />
                            <circle cx="9" cy="13" r="1" />
                            <circle cx="15" cy="13" r="1" />
                        </svg>
                        SCRIPTS
                    </a>
                    <a href="/resellers" className={styles.navLink}>
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                        RESELLERS
                    </a>
                    <a href="https://discord.gg/ARzg6Mqcxa" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                        DISCORD
                    </a>
                </div>
            </nav>

            <main className={styles.main}>
                <section className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`}>
                    <div className={styles.heroContent}>
                        <h2 className={styles.title}>
                            exploitingis<span className={styles.funText}>.FUN</span>
                        </h2>
                        <p className={styles.subtitle}>
                            The Ultimate Roblox Scripting Experience
                        </p>
                        <p className={styles.description}>
                            Free Roblox scripts that are easy to use and understand.
                        </p>

                        <div className={styles.buttonGroup}>
                            <a
                                href="https://discord.gg/ARzg6Mqcxa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryButton}
                                aria-label="Join the exploitingis.FUN Discord server"
                            >
                                Join the Discord
                            </a>
                            <button
                                className={styles.secondaryButton}
                                aria-label="Learn more about exploitingis.FUN"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className={styles.heroVisual} role="img" aria-label="Code example showcase">
                        <div className={styles.glowOrb} aria-hidden="true"></div>
                        <div className={styles.codeBlock} role="code" aria-label="Example Lua script code">
                            <div className={styles.codeHeader}>
                                <div className={styles.codeDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className={styles.codeTitle}>exploitingis.FUN</span>
                            </div>
                            <div className={styles.codeContent}>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeKeyword}>loadstring</span>
                                    <span className={styles.codeOperator}>(</span>
                                    <span className={styles.codeString}>game:HttpGet</span>
                                    <span className={styles.codeOperator}>(</span>
                                </div>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeString}>&quot;https://cdn.exploitingis.fun/loader&quot;</span>
                                </div>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeOperator}>))()</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="games" className={styles.gamesSection} aria-labelledby="games-section-title">
                    <div className={styles.container}>
                        <h2 className={styles.gamesSectionTitle} id="games-section-title">
                            Our Arsenal: Now Supporting {games.length} Games
                        </h2>
                        <p className={styles.gamesSectionSubtitle}>
                            Each script is meticulously scripted and tested to ensure you have the best and safest experience.
                        </p>

                        {isMobile ? (
                            <div className={styles.carouselWrapper} role="region" aria-label="Games carousel">
                                <EmblaCarousel slides={gameCards} options={{ loop: true }} />
                            </div>
                        ) : (
                            <div className={styles.gamesGrid} role="grid" aria-label="Supported games grid">
                                {gameCards}
                            </div>
                        )}
                    </div>
                </section>

                <section className={styles.faqSection} aria-labelledby="faq-section-title">
                    <div className={styles.container}>
                        <h2 className={styles.faqTitle} id="faq-section-title">FREQUENTLY ASKED QUESTIONS</h2>
                        <div className={styles.faqList}>
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`${styles.faqItem} ${openFAQ === index ? styles.faqItemOpen : ''}`}
                                >
                                    <button
                                        className={styles.faqQuestion}
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={openFAQ === index}
                                    >
                                        <span className={styles.faqIcon}>+</span>
                                        {faq.question}
                                    </button>
                                    <div className={styles.faqAnswer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
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
