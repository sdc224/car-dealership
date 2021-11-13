import React from "react";
import Helmet from "react-helmet";
import { Router, Switch } from "react-router-dom";
import { ColorScheme } from "../utils/theme";
import webHistory from "./history";
import routes from "./Routes";

const history = webHistory();

const Routes: React.FC = () => {
	return (
		<>
			<Helmet>
				<style>{`body { background-color: ${ColorScheme.WHITE}; }`}</style>
			</Helmet>
			<Router history={history}>
				<div style={{ height: "100%" }}>
					<Switch>
						{routes.map((route) => (
							<route.routeComponent key={route.path} {...route} />
						))}
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default Routes;
