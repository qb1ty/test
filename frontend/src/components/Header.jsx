import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="relative">
            <div className="fixed top-0 left-0 right-0 z-[1000] p-2 bg-slate-300">
                <ul className="flex justify-center items-center">
                    <li className="mr-2">
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link to={'/about'}>
                            About
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link to={'/posts'}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header