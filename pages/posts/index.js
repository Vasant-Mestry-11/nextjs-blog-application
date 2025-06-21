import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/post-utils";
import Head from "next/head";

export default function AllPostPage({
  posts
}) {
  return <>
    <Head>
      <title>All Post</title>
      <meta name="description" content="List of all blogs and tutorials " />
    </Head>
    <AllPosts posts={posts} /></>
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}