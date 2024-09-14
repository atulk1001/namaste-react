import {useRouteError} from "react-router-dom";
export default ErrorPage = () => {
    const err = useRouteError();
    return (
        <div className="error-container">
            <div className="content">
                <h1>Oops !!!</h1>
                <h3>Something went Wrong!</h3>
                <h5>{err.status}: {err.statusText}</h5>
            </div>
        </div>
    )
}