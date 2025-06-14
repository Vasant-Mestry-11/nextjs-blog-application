import AllPosts from "@/components/posts/all-posts";
import { DUMMY_POSTS } from "..";

export default function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />
}