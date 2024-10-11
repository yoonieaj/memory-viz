import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@picocss/pico";
import "./css/styles";

import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#2a6b2c",
            dark: "#005ea5",
            light: "#72ac56",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#89c48c",
            dark: "#89c48c",
            light: "#89c48c",
        },
    },
});

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

export { lightTheme, darkTheme };
