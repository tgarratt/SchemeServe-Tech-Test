import React from "react";
import {Routes, Route} from 'react-router'
import Home from "./pages/Home";

const Links = () => (
    <Routes>
        <Route exact path ='/' element={<Home />}></Route>
    </Routes>
)

export default Links