import { Metadata } from "next"
import Link from 'next/link';

export const metadata: Metadata = {
    title: {
        absolute: "Posts"
    }
}

export default function Pages() {
    const id = 100;

    return (
        <>
            <ul>
                <li><Link href="/blog/posts/1">Post 1</Link></li>
                <li><Link href="/blog/posts/2">Post 2</Link></li>
                <li><Link href="/blog/posts/3">Post 3</Link></li>
                <li><Link href={`/blog/posts/${id}`}>Post {id}</Link></li>
            </ul>

            <Link href="/"> Home </Link>
        </>
    )
}