import React from "react";
import { useDashboardStyles } from "./styles/Dashboard.style";

interface DashboardProps {
	loggedIn: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ loggedIn }) => {
	const classes = useDashboardStyles();

	return <div className={classes.root}>Hello World</div>;
};
