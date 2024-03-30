import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "./components/Layout";
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import { getPostsData } from "@/lib/posts";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const allPostsData = getPostsData()
  console.log(allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}

// SSRの場合、リクエストごとに実行する
// export const getServerSideProps = async (context) => {
//   // contextはユーザーがリクエストしたデータ
//   return {
//     props: {

//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          シマエナガ
        </p>
      </section>

      <section>
        <h2>シマエナガのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} alt='' className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>

    </Layout>
  );
}
