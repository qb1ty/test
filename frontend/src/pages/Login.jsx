import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hook/useAuth"

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { signin } = useAuth()

    const fromPath = location.state?.from?.pathname

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target
        const user = form.username.value

        if (user.trim().length) {
            signin(user, () => navigate(fromPath, { replace: true }))
        } else {
            return null
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input type="text" name="username" className="border border-transparent rounded-xl bg-slate-100 outline-none p-2" />
                <button type="submit" className="mt-5 border border-slate-100 rounded-xl py-2 px-4 active:border-slate-200 active:bg-slate-50">Login</button>
            </form>
        </div>
    )
}

export default Login