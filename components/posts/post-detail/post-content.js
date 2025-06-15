import PostHeader from "./post-header";

import classes from './post-content.module.css'
import Markdown from "react-markdown";

export default function PostContent({ post }) {
  const { title, image, slug, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`
  return <article className={classes.content}>
    <PostHeader title={title} image={imagePath} />
    <Markdown>
      {content}
    </Markdown>
  </article>
}