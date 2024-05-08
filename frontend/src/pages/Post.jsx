import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Post = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [posts, setPosts] = useState({})
    const [loading, setLoading] = useState(true)

    const goBack = () => navigate(-1)

    useEffect(() => {
        async function fetchPost() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPosts(response.data)
            setLoading(false)
        }

        fetchPost()
    }, [id])

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="md:animate-spin w-16">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M21 12a9 9 0 11-6.219-8.56"></path>
                        </g>
                    </svg>
                </div>
            </div >
        )
    } else {
        return (
            <div className="relative flex justify-center items-center">
                <button onClick={goBack} className="absolute right-10 border border-transparent rounded-lg bg-red-200 p-2">go back</button>
                <div>
                    <div key={posts.id}>
                        {posts.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default Post