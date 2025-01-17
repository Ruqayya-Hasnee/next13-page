import Link from "next/link";

export default function Home({ params }: { params: {products: string} }) {
  return (
    <>
      <h1>Home</h1>
      <Link href={"/about"}>About</Link>
      <div>The Product name is: {params.products}</div>
    </>
  );
}
