import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="fixed top-0 left-0 right-0 z-[1000] p-2 bg-slate-300">
                <div className="flex justify-center items-center">
                    <span className="mr-5">
                        <Link to="/">
                            All Country
                        </Link>
                    </span>

                </div>
            </div>
        </header>
    )
}

export default Header