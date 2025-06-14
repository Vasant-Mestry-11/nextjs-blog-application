import fs from "fs";
import matter from "gray-matter";
import path from "path";

const pathDirectory = path.join(process.cwd(), "posts");

export function getPostsData(fileName) {
  const filePath = path.join(pathDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md/, ""); // removes file extenstion
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = fs.readdirSync(pathDirectory);

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
