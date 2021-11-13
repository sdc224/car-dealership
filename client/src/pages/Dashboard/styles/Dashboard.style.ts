import { makeStyles } from "@material-ui/core";

export const useDashboardStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		height: "100vh"
	},
	gridContainer: {
		margin: 0,
		width: "100%"
	}
}));
