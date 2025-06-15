import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/post-utils";

export default function AllPostPage({
  posts
}) {
  return <AllPosts posts={posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}