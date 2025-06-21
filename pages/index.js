import FeaturedPosts from "@/components/homepage/featured-posts";
import Hero from "@/components/homepage/hero";
import { getFeaturedPosts } from "@/lib/post-utils";
import Head from "next/head";

export default function Homepage({ posts }) {
  return (
    <>
      <Head>
        <title>Welcome to Vasant&apos;s Blog</title>
        <meta name="description" content="I post about programming and web developement" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

// 1. Hero section => Present yourself
// 2. Featured posts


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}