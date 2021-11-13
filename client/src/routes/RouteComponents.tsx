import React, { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from "../utils/accessToken";

interface AuthenticatedRouteProps {
	exact?: boolean;
	path: string;
	component: ComponentType<any>;
}

// If an access token is identified, allow the user to access the route, otherwise route to the login page
export const AuthenticatedRoute = ({ component: Component, ...rest }: AuthenticatedRouteProps) => (
	<Route
		{...rest}
		render={(props) =>
			getAccessToken() ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />
		}
	/>
);

export const HybridRoute = ({ component: Component, ...rest }: AuthenticatedRouteProps) => (
	<Route {...rest} render={(props) => <Component {...props} loggedIn={getAccessToken()} />} />
);

// If an access token is identified, push the user to the dashboard, otherwise route to the specified component
export const LoggedInRoute = ({ component: Component, ...rest }: AuthenticatedRouteProps) => (
	<Route
		{...rest}
		render={(props) =>
			getAccessToken() ? (
				<Redirect to={{ pathname: "/dashboard" }} />
			) : (
				<Component {...props} />
			)
		}
	/>
);
