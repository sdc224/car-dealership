import React from "react";
import { useDashboardStyles } from "./styles/Dashboard.style";
import { CarsQueryResult, useCarsQuery } from "../../generated/graphql";
import { Grid } from "@material-ui/core";
import ImgMediaCard from "../../components/Cards/ImgMediaCard";

interface DashboardProps {
	loggedIn: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ loggedIn }) => {
	// GraphQL Mutations
	const cars: CarsQueryResult = useCarsQuery();

	const classes = useDashboardStyles();

	const handleShare = () => {
		console.log("Shared");
	};

	const handleLearnMore = () => {
		console.log("Learn More");
	};

	return (
		<div className={classes.root}>
			<Grid className={classes.gridContainer} container spacing={3}>
				{cars?.data?.getAllCars?.map((car) => (
					<Grid item xs={4} key={`Grid-${car.id}`}>
						<ImgMediaCard
							key={car.id}
							title={car.name}
							description={car.description}
							name={car.company}
							onShare={handleShare}
							onLearnMore={handleLearnMore}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};
