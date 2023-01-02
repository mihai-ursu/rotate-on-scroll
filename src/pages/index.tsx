import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rotate on scroll effect.</title>
        <meta
          name="description"
          content="A rotate on scroll effect using Framer Motion."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.textLeft}>
          <h1>Rotate on scroll effect.</h1>
          <p>
            A rotate on scroll effect using Framer Motion. This is a simple
            example of how to use Framer Motion to create a rotate on scroll
            effect.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/office.jpg"
            alt="Home office."
            width={800}
            height={533}
          />
        </div>
      </main>
    </>
  );
}
