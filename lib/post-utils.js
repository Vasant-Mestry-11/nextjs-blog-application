import fs from "fs";
import matter from "gray-matter";
import path from "path";

const pathDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(pathDirectory);
}

export function getPostsData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md/, ""); // removes file extenstion

  const filePath = path.join(pathDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostsFiles()

  const allPosts = postsFiles.map((post) => getPostsData(post));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {

  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts
}
