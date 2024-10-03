import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    if(!loaded){
        return null;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}