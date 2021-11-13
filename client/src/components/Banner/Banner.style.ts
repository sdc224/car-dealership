import { makeStyles } from "@material-ui/core";
import { ColorScheme } from "../../utils/theme";

const useBannerStyles = makeStyles(() => ({
	banner: {
		padding: 0,
		height: 430,
		position: "relative"
	},
	bannerGrid: {
		height: "100%",
		position: "relative"
	},
	content: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		padding: 0,
		color: "white",
		backgroundColor: ColorScheme.DARK_RED,
		height: "100%",
		position: "relative",
		transition: "300ms",

		"&:hover, &:active": {
			backgroundColor: ColorScheme.DARK_RED_ACTIVE
		},
		"&:last-child": {
			paddingBottom: 0
		}
	},
	typography: {
		fontWeight: 500,
		color: ColorScheme.WHITE,
		display: "inline",
		textOverflow: "ellipsis"
	},
	title: {
		fontWeight: 700,
		borderBottomColor: ColorScheme.DARK_RED,
		borderBottomWidth: 3,
		borderBottomStyle: "solid",
		marginBottom: 10
	},
	media: {
		backgroundColor: ColorScheme.WHITE,
		height: "100%",
		overflow: "hidden",
		position: "relative",
		backgroundSize: "auto"
	},
	caption: {
		color: ColorScheme.WHITE
	},
	viewButton: {
		color: ColorScheme.WHITE,
		border: "3px solid white",
		textTransform: "capitalize",
		transition: "200ms"
	},
	box: {
		position: "absolute",
		padding: 20,
		top: "5%",
		left: "50%",
		transform: "translate(-50%)",
		width: "60%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: ColorScheme.BLACK,
		color: ColorScheme.WHITE,
		textAlign: "center",
		textOverflow: "ellipsis",
		textTransform: "uppercase",
		opacity: 0.7,
		fontWeight: 300,
		transition: "300ms",
		"&:hover": {
			opacity: 0.9
		}
	},
	boxButtonSection: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "40%",
		marginTop: 10
	},
	boxButton: {
		color: ColorScheme.WHITE,
		backgroundColor: ColorScheme.DARK_RED,
		fontWeight: 700,
		borderRadius: 2,
		borderColor: ColorScheme.DARK_RED,
		lineHeight: 1,
		letterSpacing: 1.4,
		textTransform: "uppercase",
		transition: "background-color 360ms ease-in-out",
		"&:hover": {
			opacity: 1,
			backgroundColor: ColorScheme.DARK_RED_HOVER
		}
	}
}));

export default useBannerStyles;
