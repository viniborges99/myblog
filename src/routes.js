import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./pages/Home/index"
import Navbar  from "./components/navbar"


export default function myRoutes() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/post" element={<h1>post</h1>}></Route>
            </Routes>
        </BrowserRouter>

    );
}