import Image from "next/image";
import Link from "next/link";
import classes from './post-item.module.css'

export default function PostItem({ post }) {
  const { title, slug, image, date, excerpt } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return <li className={classes.post}>
    <Link href={linkPath}>
      <div className={classes.image}>
        <Image src={imagePath} alt={title} height={200} width={300} layout="responsive" />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>

      </div>
    </Link>
  </li>
}