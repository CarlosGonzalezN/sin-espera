import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="/LogoHome.png" alt="Vercel Logo" width={500} height={500} />
      </main>
    </div>
  );
}
