"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* Badge */}
        <span style={styles.badge}>🚀 Next.js Learning Project</span>

        {/* Heading */}
        <h1 style={styles.heading}>
          Build Fast.<br />
          Learn Smart.<br />
          <span style={styles.highlight}>Ship Modern Apps.</span>
        </h1>

        {/* Subtext */}
        <p style={styles.subtext}>
          A personal Next.js project to learn, build, and save
          reusable code modules for future reference.
        </p>

        {/* Buttons */}
        <div style={styles.buttons}>
          <Link href="/about" style={styles.primaryBtn}>
            Get Started
          </Link>
          <Link href="https://nextjs.org/docs" target="_blank" style={styles.secondaryBtn}>
            Read Docs →
          </Link>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "calc(100vh - 60px)",
    backgroundColor: "#0f0f1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "720px",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#1a1a2e",
    color: "#e94560",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    marginBottom: "24px",
    border: "1px solid #e9456040",
  },
  heading: {
    fontSize: "52px",
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: "1.2",
    margin: "0 0 24px 0",
  },
  highlight: {
    color: "#e94560",
  },
  subtext: {
    fontSize: "18px",
    color: "#a0a0b0",
    lineHeight: "1.7",
    marginBottom: "36px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    backgroundColor: "#e94560",
    color: "#ffffff",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "#ffffff",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    border: "1px solid #ffffff40",
  },
};