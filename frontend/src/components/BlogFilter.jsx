import { useState } from "react"

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
    const [search, setSearch] = useState(postQuery)
    const [checked, setChekced] = useState(latest)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const query = form.search.value
        const isLatest = form.isLatest.checked

        const params = {}

        if (query.length) params.post = query
        if (isLatest) params.latest = true

        setSearchParams(params)
    }

    return (
        <>
            <div className="flex flex-col justify-center max-w-[600px] mx-auto">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="search" name="search" className="border rounded-lg border-slate-200 outline-none p-2 transition duration-200 focus:border-slate-400 hover:border-slate-400"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type="checkbox" name="isLatest" className="ml-5 mr-2"
                        checked={checked}
                        onChange={(e) => setChekced(e.target.checked)}
                    /> new posts
                    <button type="submit" className="border rounded-lg border-slate-200 py-2 px-5 ml-5 transition duration-200 hover:border-slate-400">Search</button>
                </form>
            </div>
        </>
    )
}

export default BlogFilter