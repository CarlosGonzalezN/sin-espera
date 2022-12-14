import { Container, Box, Grid } from "@mui/material";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <span className={styles.logo}>footer</span>
      </a>
    </footer>
  );
}
