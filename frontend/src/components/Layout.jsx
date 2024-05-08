import { Outlet } from "react-router-dom"
import Header from "./Header"
import useAuth from "../hook/useAuth"

const Layout = () => {
    const { user, signout } = useAuth()

    return (
        <div className="mt-20">
            <Header />
            {user && <div className="fixed bottom-2 right-2">
                <button onClick={() => signout()} className="p-2.5 border rounded-xl border-transparent bg-red-500">Log Out</button>
            </div>}
            <Outlet />
        </div>
    )
}

export default Layout