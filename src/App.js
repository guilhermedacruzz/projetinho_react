import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Container from "./components/layout/Container"

import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewGirl from "./components/pages/NewGirl"

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/company">Contato</Link></li>
                <li><Link to="/contact">Empresa</Link></li>
                <li><Link to="/new_anime_girl">Adicionar</Link></li>
            </ul>

            <Container customClass="min-height">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/new_anime_girl" element={<NewGirl />} />
                </Routes>
            </Container>

            <p>
                lorem3
            </p>
        </BrowserRouter>
    );
}

export default App;
