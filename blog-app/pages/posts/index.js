import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-stared-with-nextjs",
    title: "Getting startd with NextJS",
    image: "getting-stared-nextjs.png",
    excerpt: "NextJS is a React framework",
    date: "2023-03-03",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
