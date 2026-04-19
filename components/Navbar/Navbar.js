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

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/about" className={styles.link}>About</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu — toggle open class */}
      <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/" className={styles.mobileLink}
            onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={styles.mobileLink}
            onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={styles.mobileLink}
            onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}