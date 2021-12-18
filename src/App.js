import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Container from "./components/layout/Container"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"

import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewGirl from "./components/pages/NewGirl"

function App() {
    return (
        <BrowserRouter>
            <NavBar/>

            <Container customClass="min-height">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/new_anime_girl" element={<NewGirl />} />
                </Routes>
            </Container>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;
