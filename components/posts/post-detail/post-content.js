import PostHeader from "./post-header";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import classes from "./post-content.module.css";
import Markdown from "react-markdown";
import Image from "next/image";

export default function PostContent({ post }) {
  const { title, image, slug, content } = post;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const language = code.className.split('-')[1];
      return <SyntaxHighlighter style={atomDark} language={language}>{code.children}</SyntaxHighlighter>
    }
  };
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <Markdown components={customRenderers}>{content}</Markdown>
    </article>
  );
}
