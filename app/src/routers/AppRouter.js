import { Switch, Route } from "react-router-dom"
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Accommodation from "../pages/Accommodation/Accommodation";
import Booking from "../pages/Booking/Booking";
import SuccessfulBooking from "../pages/SuccessfulBooking/SuccessfulBooking";
import SuccessfulAccommodation from "../pages/SuccessfulAddAccommodation/SuccessfulAddAccommodation";
import Administration from "../pages/Administration/Administration";
import NotFound from "../pages/NotFound/NotFound";
import roles from "../auth/roles";

const AppRouter = () => {
    return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/registro" component={Register} />
                    <Route exact path="/alojamientos/:accommodationId" component={Accommodation} />
                    <PrivateRoute exact path="/alojamientos/:accommodationId/reserva" component={Booking} />
                    <PrivateRoute exact path="/alojamientos/:accommodationId/reserva/exito" component={SuccessfulBooking} />
                    <PrivateRoute hasRole={roles.admin} exact path="/administracion" component={Administration} />
                    <PrivateRoute hasRole={roles.admin} exact path="/administracion/exito" component={SuccessfulAccommodation} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Layout>
    )
}

export default AppRouter;