import Link from 'next/link'
import styles from "../styles/home.module.css"
export default async function Home() {
  return <div className={styles.home}>
    <div>
      <div><h1>Hi, I'm Ranveer, Learning next13</h1></div>
      <div><Link href="/blog">Checkout my blogs</Link></div>
      <div><Link href="/contact">
      Contact Me
      </Link></div>
    </div>
  </div>
}
