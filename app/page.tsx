import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Link href="/posts">Post</Link>
      <Link href="/galery">Galery</Link>
    </main>
  );
}
