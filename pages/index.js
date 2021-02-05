import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'


export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className={styles.switch} /> // skeleton on server

  return (

    <div className={styles.container}>
      <Head>
        <title>Open-Sourced Olaf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <a className={styles.logo} href='/'>
            <img src="/olaf-head.png" width="35" top alt="Olaf Head" />
          </a>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              <li key="team" className={styles.link}>
                <a href='/#team'>Team</a>
              </li>
              <li key="projects" className={styles.link}>
                <a href='/#projects'>Projects</a>
              </li>
              <li key="contact" className={styles.link}>
                <a href='/#contact'>Contact</a>
              </li>
            </ol>
          </nav>
          <label htmlFor="themeCheckbox" className={styles.switch}>
            <input
              id="themeCheckbox"
              type="checkbox"
              className={styles.input}
              checked={resolvedTheme === 'dark'}
              onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            />
            <span className={styles.slider} />
            <span className={resolvedTheme === 'dark' ? styles.iconDark : styles.iconLight}>{resolvedTheme === 'dark' ? '🌙' : '☀️'}</span>
          </label>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Open-Sourced</span> Olaf
        </h1>

        <img className={styles.heroImage} src="/olaf.png"></img>
        
        <h2 id="team" className={styles.sectionTitle}>Team</h2>
        <div className={styles.section}>
          <div></div>
        </div>

        <img src="/funny-olaf.png" className={styles.sideImage}></img>

        <h2 id="projects" className={styles.sectionTitle}>Projects</h2>
        <div className={styles.section}>
          <a href="#" className={styles.card}>
            <h3>Project 1 &rarr;</h3>
            <p>Lorem ipsum dolor hic tibi blabla blablabla</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <p>Lorem ipsum dolor hic tibi blabla blablabla</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 3 &rarr;</h3>
            <p>Lorem ipsum dolor hic tibi blabla blablabla</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 4 &rarr;</h3>
            <p>Lorem ipsum dolor hic tibi blabla blablabla</p>
          </a>
        </div>

        <h2 id="contact" className={styles.sectionTitle}>Contact</h2>
        <div className={styles.section}>
          <a href="tel:4159993878" className={styles.card}>
            <h3>Call Us &rarr;</h3>
            <p>For urgent matters (if your house is burning down)</p>
          </a>
          <a href="mailto:olaf@mlh.io" className={styles.card}>
            <h3>Email Us &rarr;</h3>
            <p>For not so urgent matters (if your roof is leaking)</p>
          </a>
        </div>

      </main>

      <img src="/olaf-popup.png" className={styles.popupImage}></img>
      <footer className={styles.footer}>
        <a href="https://mlh.io" target="_blank">
          Powered by{' '}
          <img src="/mlh.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
