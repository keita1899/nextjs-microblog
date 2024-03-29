import { getAllPostIds, getPostData } from "@/lib/posts"
import Layout from "../components/Layout"
import utilStyles from '../../styles/utils.module.css'
import Head from "next/head"

export const getStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    // paths以外のパスを指定すると404エラーになる
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }) => {
  
  return (
    <Layout>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>
          {postData.title}
        </h1>
        <div className={utilStyles.ligthText}>
          {postData.data}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML}} />
      </article>
    </Layout>
  )
}

export default Post