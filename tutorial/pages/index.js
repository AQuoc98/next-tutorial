import Link from "next/link";
export default function Home(props) {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}
