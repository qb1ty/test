import { Outlet, Link } from "react-router-dom"

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>About</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, magnam?</span>

            <div className="flex justify-center items-center mt-10">
                <Link to={"contacts"} className="mr-5">Contacts</Link>
                <Link to={"team"}>Team</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default About