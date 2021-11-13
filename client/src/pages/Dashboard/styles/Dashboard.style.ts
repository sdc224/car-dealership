import { makeStyles } from "@material-ui/core";

export const useDashboardStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexGrow: 1,
		height: "100%",
		width: "100%"
	},
	loading: {
		display: "flex",
		width: "100%",
		height: "100vh",
		justifyContent: "center",
		alignItems: "center"
	},
	gridContainer: {
		margin: 0,
		width: "100%"
	}
}));
