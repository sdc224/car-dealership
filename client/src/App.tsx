import React from "react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";
import Routes from "./routes";
import { setAccessToken } from "./utils/accessToken";
import { Loading } from "./components/Loading/Loading";
import { ColorScheme } from "./utils/theme";

export const App: React.FC = () => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, serError] = React.useState<string>("");

	// Fetch refresh token
	React.useEffect(() => {
		fetch((process.env.REACT_APP_SERVER_URL as string) + "/refresh_token", {
			method: "POST",
			credentials: "include"
		})
			.then(async (res) => {
				const { accessToken } = await res.json();
				setAccessToken(accessToken);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				serError("Very Sorry, but our servers want better salary 🤦‍♂️😢");
			});
	}, []);

	if (loading && error.length === 0) {
		return (
			<>
				<Helmet>
					<style>{`body { background-color: ${ColorScheme.WHITE}; }`}</style>
				</Helmet>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)"
					}}
				>
					<Loading />
				</div>
			</>
		);
	}

	if (!loading && error.length > 0)
		return (
			<Typography align="center" variant="h1">
				{error}
			</Typography>
		);

	return (
		<>
			<Helmet>
				<style>{`body { background-color: ${ColorScheme.WHITE}; }`}</style>
			</Helmet>
			<Routes />
		</>
	);
};
