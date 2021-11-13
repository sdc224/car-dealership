import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { useDashboardStyles } from "./styles/Dashboard.style";
import { CarsQueryResult, useCarsQuery } from "../../generated/graphql";
import ImgMediaCard from "../../components/Cards/ImgMediaCard";
import { Loading } from "../../components/Loading/Loading";
import Banner from "../../components/Banner";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "./../../components/Navbar/Navbar";

interface DashboardProps {
	loggedIn: string;
}

const images = ["red-car.jpg", "blue-car.jpg", "white-car.jpg", "yellow-car.jpg"];

export const Dashboard: React.FC<DashboardProps> = ({ loggedIn }) => {
	// GraphQL Mutations
	const cars: CarsQueryResult = useCarsQuery();

	const classes = useDashboardStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleShare = () => {
		console.log("Shared");
	};

	const handleLearnMore = () => {
		console.log("Learn More");
	};

	return (
		<div className={classes.root}>
			{!cars || !cars.data ? (
				<div className={classes.loading}>
					<Loading />
				</div>
			) : (
				<div>
					<Navbar />
					<Carousel
						animation="slide"
						interval={4000}
						stopAutoPlayOnHover={true}
						autoPlay={false}
					>
						{cars?.data?.getAllCars?.slice(0, 4).map((car, index) => (
							<Banner
								key={car.id}
								item={{
									...car,
									title: car.name,
									subtitle: car.description,
									tagline: car.tagline,
									image:
										index === 0 && !isMobile
											? "/static/alfra-romeo-sports-car-video.mp4"
											: `/static/${
													images[
														Math.floor(Math.random() * images.length)
													]
											  }`,
									imageType: index === 0 && !isMobile ? "video" : "image",
									videoPoster: `/static/${
										images[Math.floor(Math.random() * images.length)]
									}`
								}}
							/>
						))}
					</Carousel>
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
									image={{
										imagePath: `/static/${
											images[Math.floor(Math.random() * images.length)]
										}`,
										alt: "Car Image"
									}}
								/>
							</Grid>
						))}
					</Grid>
				</div>
			)}
		</div>
	);
};
