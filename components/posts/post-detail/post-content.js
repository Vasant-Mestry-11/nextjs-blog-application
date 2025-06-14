import PostHeader from "./post-header";

import classes from './post-content.module.css'
import Markdown from "react-markdown";

const DUMMY_ARTICLE = {
  title: "Getting started with nextjs",
  slug: "getting-started-with-nextjs",
  image: "getting-started-with-nextjs.png",
  date: "2022-02-10",
  content: "# Nextjs is react framwork",
}

export default function PostContent() {
  const { title, image, slug, content } = DUMMY_ARTICLE;
  const imagePath = `/images/posts/${slug}/${image}`
  return <article className={classes.content}>
    <PostHeader title={title} image={imagePath} />
    <Markdown>
      {content}
    </Markdown>
  </article>
}