"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>

        {/* Logo */}
        <Link href="/" style={styles.logo}>
          MyApp
        </Link>

        {/* Desktop Menu */}
        <ul style={styles.menu}>
          <li><Link href="/" style={styles.link}>Home</Link></li>
          <li><Link href="/about" style={styles.link}>About</Link></li>
          <li><Link href="/contact" style={styles.link}>Contact</Link></li>
        </ul>

        {/* Hamburger Button (mobile) */}
        <button
          style={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul style={styles.mobileMenu}>
          <li><Link href="/" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" style={styles.mobileLink} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#1a1a2e",
    padding: "0 20px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
  },
  logo: {
    color: "#e94560",
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "24px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
  mobileMenu: {
    listStyle: "none",
    padding: "10px 0",
    margin: 0,
    backgroundColor: "#16213e",
  },
  mobileLink: {
    display: "block",
    padding: "12px 20px",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
  },
};