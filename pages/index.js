import FeaturedPosts from "@/components/homepage/featured-posts";
import Hero from "@/components/homepage/hero";
import { getFeaturedPosts } from "@/lib/post-utils";

export default function Homepage({ posts }) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
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