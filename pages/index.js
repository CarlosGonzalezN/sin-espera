import Router from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    sleep(5000);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="/LogoHome.png" alt="Vercel Logo" width={250} height={250} />
      </main>
    </div>
  );
}
