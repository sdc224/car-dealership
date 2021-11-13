import { makeStyles } from "@material-ui/core";
import { ColorScheme } from "../../utils/theme";

const useNavbarStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: ColorScheme.WHITE,
		color: ColorScheme.BLACK
	},
	navLinks: {
		width: "40%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	logo: {
		flexGrow: 1,
		cursor: "pointer"
	},
	link: {
		textDecoration: "none",
		color: ColorScheme.BLACK,
		fontSize: 20,
		"&:hover": {
			borderBottom: "3px solid",
			borderBottomColor: ColorScheme.DARK_RED_HOVER
		}
	},
	profileSection: {
		width: "10%"
	}
}));

export default useNavbarStyles;
