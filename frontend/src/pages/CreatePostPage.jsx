import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CreatePostPage = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target
        const post = form.post.value
        const body = form.body.value

        if (post.trim().length) {
            async function postPosts() {
                try {
                    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                        title: post,
                        body: body
                    })

                    console.log(response.data)
                } catch (error) {
                    console.log(error)
                }
            }

            postPosts()
            navigate('/')
        }
    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" name="post" placeholder="Enter post title" className="border rounded-xl border-slate-200 p-2 outline-none focus:border-slate-400" />
                <textarea type="text" name="body" placeholder="Enter post body" className="mt-2 border rounded-xl border-slate-200 p-2 outline-none focus:border-slate-400"></textarea>
                <button type="submit" className="mt-5 py-2 px-4 border rounded-lg border-transparent bg-slate-300">Add post</button>
            </form>
        </div>
    )
}

export default CreatePostPage