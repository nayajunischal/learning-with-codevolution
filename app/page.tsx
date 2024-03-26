import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link href="/blog/posts">
        Posts
      </Link>
      <Link href="/dashboard" className="ml-3 text-blue-300">Dashboard</Link>
    </div>
  );
}
