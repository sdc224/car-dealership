import { RouteProps, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Bye } from "../pages/Bye";
import jsonRoutes from "./jsonRoutes.json";
import { HybridRoute, LoggedInRoute } from "./RouteComponents";
import NotFound from "../pages/NotFound";

interface RouteWithComponentProps extends RouteProps {
	routeComponent: React.ComponentType<any>;
}

const routes: RouteWithComponentProps[] = [
	{
		routeComponent: Route,
		path: jsonRoutes.HOME,
		component: Home,
		exact: true
	},
	{
		routeComponent: LoggedInRoute,
		path: jsonRoutes.LOGIN,
		component: Login,
		exact: true
	},
	{
		routeComponent: LoggedInRoute,
		path: jsonRoutes.REGISTER,
		component: Register,
		exact: true
	},
	{
		routeComponent: HybridRoute,
		path: jsonRoutes.DASHBOARD,
		component: Dashboard,
		exact: true
	},
	{
		routeComponent: Route,
		path: jsonRoutes.BYE,
		component: Bye,
		exact: true
	},
	{
		routeComponent: Route,
		path: jsonRoutes.NOTFOUND,
		component: NotFound
	}
];

export default routes;
