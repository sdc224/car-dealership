import React from "react";
import { useDashboardStyles } from "./styles/Dashboard.style";

export const Dashboard: React.FC = () => {
	const classes = useDashboardStyles();

	return <div className={classes.root}>Hello World</div>;
};
