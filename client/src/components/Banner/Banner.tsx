import React from "react";
import clsx from "clsx";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import useBannerStyles from "./Banner.style";

type Item = {
	title: string;
	subtitle: string;
	description: string;
	tagline: string;
	image: string;
	imageType: "image" | "video" | "other";
	videoPoster?: string;
};

interface BannerProps {
	item: Item;
}

const getComponentOnImageType = (imageType: string, poster?: string) => {
	switch (imageType) {
		case "image":
			return { component: "img" };
		case "video":
			return { component: "video", autoPlay: true, poster, muted: true };

		default:
			return { component: "div" };
	}
};

const Banner: React.FC<BannerProps> = ({ item }) => {
	const classes = useBannerStyles();

	const ref = React.useRef<any>(null);

	React.useEffect(() => {
		if (ref && ref.current) {
			if (ref.current.nodeName === "VIDEO") {
				ref.current.play?.();
				ref.current.addEventListener("ended", function () {
					const v = ref.current.currentSrc;
					ref.current.src = "";
					ref.current.src = v;
				});
			}
		}
	}, []);

	const box = (
		<Box className={classes.box}>
			<Typography
				noWrap={true}
				variant="h4"
				className={clsx(classes.typography, classes.title)}
			>
				{item.title}
			</Typography>
			<Typography variant="h5" className={classes.typography}>
				{item.subtitle}
			</Typography>
			<div className={classes.boxButtonSection}>
				<Button className={classes.boxButton} endIcon={<ArrowForward />}>
					Explore
				</Button>
				<Button className={classes.boxButton} endIcon={<ArrowForward />}>
					View Offers
				</Button>
			</div>
		</Box>
	);

	const imageDetails = getComponentOnImageType(item.imageType, item.videoPoster);

	const content = (
		<CardContent className={classes.content}>
			<CardMedia
				ref={ref}
				className={classes.media}
				image={item.image}
				title={item.title}
				{...imageDetails}
			/>
			{box}
		</CardContent>
	);

	return (
		<Card raised className={classes.banner}>
			{content}
		</Card>
	);
};

export default Banner;
