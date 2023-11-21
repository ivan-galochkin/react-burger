import App from "./components/app/App";
import React from "react";
import {createRoot} from "react-dom/client";
import "./css/normalize.css"

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
