import FeaturedPosts from "@/components/homepage/featured-posts";
import Hero from "@/components/homepage/hero";

export const DUMMY_POSTS = [
  {
    title: "Getting started with nextjs",
    slug: "getting-started-with-nextjs",
    image: "getting-started-with-nextjs.png",
    date: "2022-02-10",
    excerpt: "Nextjs is react framwork",
  },
  {
    title: "Getting started with nextjs",
    slug: "getting-started-with-nextjs2",
    image: "getting-started-with-nextjs.png",
    date: "2022-02-10",
    excerpt: "Nextjs is react framwork",
  },
  {
    title: "Getting started with nextjs",
    slug: "getting-started-with-nextjs3",
    image: "getting-started-with-nextjs.png",
    date: "2022-02-10",
    excerpt: "Nextjs is react framwork",
  },
  {
    title: "Getting started with nextjs",
    slug: "getting-started-with-nextjs4",
    image: "getting-started-with-nextjs.png",
    date: "2022-02-10",
    excerpt: "Nextjs is react framwork",
  },
];


export default function Homepage() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}

// 1. Hero section => Present yourself
// 2. Featured posts
