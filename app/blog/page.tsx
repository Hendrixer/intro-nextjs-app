import { getAllPosts } from "../../lib/cms";
import Link from 'next/link'
export default async function Blog(){
    const posts = await getAllPosts()

    return (
        <div>
            {posts.map((post) => 
                <Link href={`/blog/${post.slug}`}>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                </Link>
            )}
        </div>
    )

}