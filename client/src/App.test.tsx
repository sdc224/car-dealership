import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("<App />", () => {
	const app = render(<App />);

	it("Is not falsy", () => expect(app).toBeTruthy());
	it("Matches Snapshot", () => expect(app.asFragment()).toMatchSnapshot());
});
