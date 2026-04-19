"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          MyApp
        </Link>

        {/* Single Menu — works for both desktop and mobile */}
        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li><Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" className={styles.link} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Hamburger — only visible on mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>
    </nav>
  );
}