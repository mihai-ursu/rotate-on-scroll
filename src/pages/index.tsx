import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Stamp from "assets/stamp.svg";
import Rotate from "components/Rotate/Rotate";

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
        <div className={styles.spacer} />
        <div className={styles.content}>
          <div className={styles.textLeft}>
            <h1>Rotate on scroll effect.</h1>
            <p>
              A rotate on scroll effect using Framer Motion. This is a simple
              example of how to use Framer Motion to create a rotate on scroll
              effect.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.stampWrapper}>
              <Rotate isEffectActive={true}>
                <Stamp className={styles.stamp} />
              </Rotate>
            </div>
            <Image
              src="/images/office.jpg"
              alt="Home office."
              width={800}
              height={533}
            />
          </div>
        </div>
        <div className={styles.spacer} />
      </main>
    </>
  );
}
