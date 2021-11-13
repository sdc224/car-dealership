import React from "react";
import { useHistory } from "react-router";
import { ColorScheme } from "../utils/theme";

export const Home: React.FC = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push("/dashboard");
	};

	return (
		<div
			style={{ height: "100vh", backgroundColor: ColorScheme.PRIMARY, marginTop: "-48px" }}
			onClick={handleClick}
		>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)"
				}}
			>
				<div
					style={{
						color: ColorScheme.WHITE,
						textTransform: "uppercase",
						letterSpacing: 10,
						fontSize: 64,
						fontWeight: "bold"
					}}
				>
					Car Catalogue
				</div>
				<div style={{ color: ColorScheme.WHITE, letterSpacing: 8 }}>List of Cars.</div>
			</div>
		</div>
	);
};
