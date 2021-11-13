import React from "react";
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	useTheme,
	useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useNavbarStyles from "./Navbar.styles";

function Navbar() {
	const classes = useNavbarStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	// TODO : Mobile Drawer View

	return (
		<AppBar position="static" className={classes.appBar}>
			<CssBaseline />
			<Toolbar>
				<Typography variant="h4" className={classes.logo}>
					Navbar
				</Typography>
				{isMobile ? (
					<React.Fragment />
				) : (
					<div className={classes.navLinks}>
						<Typography variant="h4">
							<Link to="/" className={classes.link}>
								Home
							</Link>
						</Typography>

						<Typography variant="h4">
							<Link to="/about" className={classes.link}>
								About
							</Link>
						</Typography>
						<Typography variant="h4">
							<Link to="/contact" className={classes.link}>
								Contact
							</Link>
						</Typography>
						<Typography variant="h4">
							<Link to="/faq" className={classes.link}>
								FAQ
							</Link>
						</Typography>
					</div>
				)}
				<div className={classes.profileSection} />
			</Toolbar>
		</AppBar>
	);
}
export default Navbar;
