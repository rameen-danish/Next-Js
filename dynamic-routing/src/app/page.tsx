import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Customer Care Center</h1>
       <ul>
        <li><Link href="/001">Customer1</Link></li>
        <li><Link href="/002">Customer2</Link></li>
        <li><Link href="/003">Customer3</Link></li>
        <li><Link href="/004">Customer4</Link></li>
        <li><Link href="/005">Customer5</Link></li>
       </ul>
      </div>
    </main>
  );
}
