import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
				<div className={styles.teamSection}>
					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/rashika.jpg" className={styles.headshot}></img>
						</div>
						<h3>Rashika Karki</h3>
						<p>Nepal</p>
						<p className={styles.university}>Kathmandu University</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/aitik.png" className={styles.headshot}></img>
						</div>
						<h3>Aitik Gupta</h3>
						<p>India</p>
						<p className={styles.university}>IIIT Gwalior</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/anjali.jpg" className={styles.headshot}></img>
						</div>
						<h3>Anjali Soni</h3>
						<p>India</p>
						<p className={styles.university}>IIT Guwahati</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/bodisha.jpeg" className={styles.headshot}></img>
						</div>
						<h3>Bodisha Thomas</h3>
						<p>India</p>
						<p className={styles.university}>APJ Abdul Kalam University</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/bushra.jpeg" className={styles.headshot}></img>
						</div>
						<h3>Bushra Akram</h3>
						<p>Pakistan</p>
						<p className={styles.university}>Bahria University</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/dean.jpg" className={styles.headshot}></img>
						</div>
						<h3>Dean Gladish</h3>
						<p>United States</p>
						<p className={styles.university}>Carleton College</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/deepak.jpg" className={styles.headshot}></img>
						</div>
						<h3>Deepak Agrawal</h3>
						<p>India</p>
						<p className={styles.university}>Savitribai Phule Pune Uni.</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/marco.jpg" className={styles.headshot}></img>
						</div>
						<h3>Marco Chan</h3>
						<p>Canada</p>
						<p className={styles.university}>University of Pennsylvania</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/marco.jpg" className={styles.headshot}></img>
						</div>
						<h3>Prashi Doval</h3>
						<p>India</p>
						<p className={styles.university}>IGDTUW</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/rashi.jpg" className={styles.headshot}></img>
						</div>
						<h3>Rashi Sharma</h3>
						<p>India</p>
						<p className={styles.university}>NIT Kurukshetra</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/samuel.jpeg" className={styles.headshot}></img>
						</div>
						<h3>Samuel Yuan</h3>
						<p>United States</p>
						<p className={styles.university}>High School</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/marco.jpg" className={styles.headshot}></img>
						</div>
						<h3>Sena Yevenyo</h3>
						<p>United States</p>
						<p className={styles.university}>Lafayette College</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/shrill.jpg" className={styles.headshot}></img>
						</div>
						<h3>Shrill Shrestha</h3>
						<p>United States</p>
						<p className={styles.university}>University of Louisiana</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/marco.jpg" className={styles.headshot}></img>
						</div>
						<h3>Steven Tey</h3>
						<p>United States</p>
						<p className={styles.university}>Minerva Schools at KGI</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/marco.jpg" className={styles.headshot}></img>
						</div>
						<h3>Sumi Kolli</h3>
						<p>United States</p>
						<p className={styles.university}>USC</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>

					<span className={styles.teamCard}>
						<div className={styles.teamImageWrapper}>
							<img src="/headshots/marco.jpg" className={styles.headshot}></img>
						</div>
						<h3>Yvon Manzi</h3>
						<p>United States</p>
						<p className={styles.university}>Columbia University</p>
						<a href="https://www.github.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg></a>
						<a href="https://www.linkedin.com" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" className={styles.linkIcon} viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg></a>
					</span>
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
=======
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={styles.switch} />; // skeleton on server

  return (
    <div className={styles.container}>
      <Head>
        <title>Open-Sourced Olaf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <a className={styles.logo} href="/">
            <img src="/olaf-head.png" width="35" top alt="Olaf Head" />
          </a>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              <li key="team" className={styles.link}>
                <a href="/#team">Team</a>
              </li>
              <li key="projects" className={styles.link}>
                <a href="/#projects">Projects</a>
              </li>
              <li key="contact" className={styles.link}>
                <a href="/#contact">Contact</a>
              </li>
            </ol>
          </nav>
          <label htmlFor="themeCheckbox" className={styles.switch}>
            <input
              id="themeCheckbox"
              type="checkbox"
              className={styles.input}
              checked={resolvedTheme === "dark"}
              onChange={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            />
            <span className={styles.slider} />
            <span
              className={
                resolvedTheme === "dark" ? styles.iconDark : styles.iconLight
              }
            >
              {resolvedTheme === "dark" ? "🌙" : "☀️"}
            </span>
          </label>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Open-Sourced</span> Olaf
        </h1>

        <img className={styles.heroImage} src="/olaf.png"></img>

        <h2 id="team" className={styles.sectionTitle}>
          Team
        </h2>
        <div className={styles.section}>
          <div></div>
        </div>

        <img src="/funny-olaf.png" className={styles.sideImage}></img>
        <h2 id="project" className={styles.sectionTitle}>
          Projects
        </h2>
        <div className={styles.section}>
          <a href="#" className={styles.card}>
            <h3>Project 1 &rarr;</h3>
            <div className={styles.imageContainer}>
              <img src="/image1.jpg" className={styles.projectImage}></img>
              <button className={styles.blueButton}>Read More</button>
            </div>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 2 &rarr;</h3>
            <div className={styles.imageContainer}>
              <img src="/image7.jpg" className={styles.projectImage}></img>
              <button className={styles.blueButton}>Read More</button>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <h3>Project 3 &rarr;</h3>
            <div className={styles.imageContainer}>
              <img src="/image4.jpg" className={styles.projectImage}></img>
              <button className={styles.blueButton}>Read More</button>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <h3>Project 4 &rarr;</h3>
            <div className={styles.imageContainer}>
              <img src="/image6.jpg" className={styles.projectImage}></img>
              <button className={styles.blueButton}>Read More</button>
            </div>
          </a>
        </div>

        <h2 id="contact" className={styles.sectionTitle}>
          Contact
        </h2>
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
          Powered by{" "}
          <img src="/mlh.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
