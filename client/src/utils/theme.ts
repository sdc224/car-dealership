import { createTheme, Theme } from "@material-ui/core";

export enum ColorScheme {
	PRIMARY = "#222B2D",
	SECONDARY = "#29AABB",
	ORANGE = "#F15742",
	MAROON = "#432D32",
	WHITE = "#FFFEF9",
	BLACK = "#000000",
	HOVER = "#148C9C",
	PRIMARY_HOVER = "#090c0c",
	DARK_RED = "#771818",
	DARK_RED_HOVER = "#681414",
	DARK_RED_ACTIVE = "#571111"
}

// For Material UI
export const theme: Theme = createTheme({
	palette: {
		primary: {
			main: ColorScheme.PRIMARY
		},
		secondary: {
			main: ColorScheme.ORANGE
		},
		info: {
			main: ColorScheme.MAROON
		},
		contrastThreshold: 3,
		tonalOffset: 0.2
	}
});
