// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
        <NextUIProvider >
            <main className="light light:bg-gray-100 light:text-black bg-black text-white"
            >
                <App />
            </main>
        </NextUIProvider>
    </React.StrictMode>,
);
