'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { EmblaCarousel } from './components/Carousel'
import Navbar from './components/Navbar'

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

            <Navbar />

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
