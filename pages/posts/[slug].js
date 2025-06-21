import PostContent from "@/components/posts/post-detail/post-content"
import { getPostsData, getPostsFiles } from "@/lib/post-utils";
import Head from "next/head";

const SinglePostPage = ({ post }) => {
  return <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent post={post} /></>
}

export default SinglePostPage


export function getStaticPaths() {

  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostsData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600,
  }
}
