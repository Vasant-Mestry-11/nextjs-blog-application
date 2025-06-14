import PostsGrid from "./posts-grid";
import classes from './all-posts.module.css'

export default function AllPostsPage({ posts }) {

  return <section className={classes.posts}>
    <h1>All Posts</h1>
    <PostsGrid posts={posts} />
  </section>
}