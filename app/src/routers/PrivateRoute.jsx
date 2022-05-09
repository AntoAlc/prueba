import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRoute = ({ hasRole: role, ...restProps }) => {

    const location = useLocation();

    const { hasRole, isLogged } = useAuth();
    
    if (role && !hasRole(role)) {
        return <Redirect to={{ pathname: '/', state: { from: location, redirectLogin: false }}} />
    }

    return (
        <>{
            isLogged() ?
                <Route {...restProps} />
                :
                <Redirect to={{ pathname: '/login', state: { from: location, redirectLogin: false }}} />
        }
        </>
    )
}

export default PrivateRoute;