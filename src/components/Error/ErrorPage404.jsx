import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import s from "./Erorr.module.css"

const ErrorPage404 = () => {
    const error = useRouteError()

    return (
        <div className={s.container}>
            <h1>Даунич, такой страницы нету</h1>
            <h2>404 Not Found Error</h2>
            <p>
                <i>{error.statusText}</i>
            </p>
            <p>
                <i>{error.data}</i>
            </p>
            <Link to={"/"}><button>Вернуться</button></Link>
        </div>
    )
}

export default ErrorPage404