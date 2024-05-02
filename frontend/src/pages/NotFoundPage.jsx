import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="mt-14 text-center">
            <Link to="/">
                Ничего не найдено.
                Вернуться на главную
            </Link>

            <div className="flex justify-center items-center mt-20">
                <img src="/not-found.png" alt="Not Found" />
            </div>
        </div>
    )
}

export default NotFoundPage