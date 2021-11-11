import React, { ComponentType } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home } from "./pages/Home";
import { Bye } from "./pages/Bye";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { getAccessToken } from "./utils/accessToken";
import { ColorScheme } from "./utils/theme";
import { Dashboard } from "./pages/Dashboard/Dashboard";

interface AuthenticatedRouteProps {
	exact?: boolean;
	path: string;
	component: ComponentType<any>;
}

// If an access token is identified, allow the user to access the route, otherwise route to the login page
const AuthenticatedRoute = ({ component: Component, ...rest }: AuthenticatedRouteProps) => (
	<Route
		{...rest}
		render={(props) =>
			getAccessToken() ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />
		}
	/>
);

// If an access token is identified, push the user to the dashboard, otherwise route to the specified component
const LoggedInRoute = ({ component: Component, ...rest }: AuthenticatedRouteProps) => (
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

export const Routes: React.FC = () => {
	return (
		<>
			<Helmet>
				<style>{`body { background-color: ${ColorScheme.WHITE}; }`}</style>
			</Helmet>
			<BrowserRouter>
				<div style={{ height: "100%" }}>
					<main style={{ marginTop: 24 }}>
						<Switch>
							<Route exact path="/" component={Home} />
							<LoggedInRoute exact path="/register" component={Register} />
							<LoggedInRoute exact path="/login" component={Login} />
							<AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
							<Route exact path="/bye" component={Bye} />
							<Route
								path="/"
								render={() => (
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											marginTop: 12
										}}
									>
										404 Not Found
									</div>
								)}
							/>
						</Switch>
					</main>
				</div>
			</BrowserRouter>
		</>
	);
};
