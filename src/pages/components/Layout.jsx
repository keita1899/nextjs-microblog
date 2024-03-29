import Head from "next/head"
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from "next/link"

export const siteTitle = 'Next.js Blog'

const Layout = ({children, home}) => {
  const name = 'Shin code'

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img 
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} 
              src="/images/profile.png" alt="" />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) : (
          <>
            <img 
              className={`${styles.headerImage} ${utilStyles.borderCircle}`} 
              src="/images/profile.png" alt="" />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) }
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>← ホームへ戻る</Link>
        </div>
      )}
    </div>
  )
}

export default Layout