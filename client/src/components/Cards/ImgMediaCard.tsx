import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardActionArea: {
		flexGrow: 1
	}
});

interface ImageOptions {
	imagePath: string;
	alt?: string;
}

interface ImgMediaCardProps {
	image?: ImageOptions;
	title: string;
	name?: string;
	description?: string;
	onShare: () => void;
	onLearnMore: () => void;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({
	image,
	title,
	name,
	description,
	onShare,
	onLearnMore
}) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea className={classes.cardActionArea}>
				{image ? (
					<CardMedia
						component="img"
						alt={image.alt}
						height="140"
						image={image.imagePath}
						title={title}
					/>
				) : (
					<Typography>{title}</Typography>
				)}
				<CardContent>
					{name && (
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
					)}
					{description && (
						<Typography variant="body2" color="textSecondary" component="p">
							{description}
						</Typography>
					)}
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary" onClick={onShare}>
					Share
				</Button>
				<Button size="small" color="primary" onClick={onLearnMore}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default ImgMediaCard;
