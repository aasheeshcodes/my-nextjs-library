import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Top Row */}
        <div style={styles.topRow}>

          {/* Brand */}
          <div style={styles.brand}>
            <h3 style={styles.logo}>MyApp</h3>
            <p style={styles.tagline}>
              Learning Next.js step by step.<br />
              Saving every module for future use.
            </p>
          </div>

          {/* Links */}
          <div style={styles.linksGroup}>
            <h4 style={styles.groupTitle}>Navigation</h4>
            <ul style={styles.linkList}>
              <li><Link href="/" style={styles.link}>Home</Link></li>
              <li><Link href="/about" style={styles.link}>About</Link></li>
              <li><Link href="/contact" style={styles.link}>Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div style={styles.linksGroup}>
            <h4 style={styles.groupTitle}>Resources</h4>
            <ul style={styles.linkList}>
              <li>
                <Link href="https://nextjs.org/docs" target="_blank" style={styles.link}>
                  Next.js Docs
                </Link>
              </li>
              <li>
                <Link href="https://github.com/aasheeshcodes/my-nextjs-library" target="_blank" style={styles.link}>
                  GitHub Repo
                </Link>
              </li>
              <li>
                <Link href="https://vercel.com" target="_blank" style={styles.link}>
                  Deploy on Vercel
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bottom Row */}
        <div style={styles.bottomRow}>
          <p style={styles.copyright}>
            © {year} MyApp. Built while learning Next.js.
          </p>
          <p style={styles.credit}>
            Made with ❤️ by Aasheesh
          </p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    padding: "48px 20px 24px",
    marginTop: "auto",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "32px",
    marginBottom: "32px",
  },
  brand: {
    maxWidth: "280px",
  },
  logo: {
    color: "#e94560",
    fontSize: "22px",
    fontWeight: "800",
    margin: "0 0 12px 0",
  },
  tagline: {
    color: "#a0a0b0",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: 0,
  },
  linksGroup: {
    minWidth: "140px",
  },
  groupTitle: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    color: "#a0a0b0",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s",
  },
  divider: {
    borderTop: "1px solid #ffffff15",
    marginBottom: "24px",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
  },
  copyright: {
    color: "#606070",
    fontSize: "13px",
    margin: 0,
  },
  credit: {
    color: "#606070",
    fontSize: "13px",
    margin: 0,
  },
};