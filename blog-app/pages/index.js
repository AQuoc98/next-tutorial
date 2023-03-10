import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";

const DUMMY_POSTS = [
  {
    slug: "getting-stared-with-nextjs",
    title: "Getting startd with NextJS",
    image: "getting-stared-nextjs.png",
    excerpt: "NextJS is a React framework",
    date: "2023-03-03",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
