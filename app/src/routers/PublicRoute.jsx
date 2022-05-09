import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRoute = (props) => {

    const location = useLocation();

    const { isLogged } = useAuth();

    return (
        <>
            {
                isLogged() ?
                    <Redirect to={{ pathname: '/', state: { from: location, redirectLogin: false }}} />
                    :
                    <Route {...props}/>
            }
        </>
    )
}

export default PublicRoute;