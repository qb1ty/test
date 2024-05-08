import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import BlogFilter from "../components/BlogFilter"
import axios from "axios"

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.get('latest')

    const startFrom = latest ? 80 : 0



    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)
            setLoading(false)
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="md:animate-spin w-16">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M21 12a9 9 0 11-6.219-8.56"></path>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen">
            <Link to={"/posts/new"}>
                <div className="fixed top-14 left-2">
                    <button className="p-2.5 border rounded-xl border-transparent bg-lime-200">Create post</button>
                </div>
            </Link>

            <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery} />

            <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-5">
                {posts.filter((post) => post.title.toLowerCase().includes(postQuery.toLowerCase()) && post.id >= startFrom).map((post) => {
                    return (
                        <Link to={`/post/${post.id}`} key={post.id}>
                            <div>
                                {post.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog