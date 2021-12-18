import React from "react";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"

import Container from "./Container";

import logo from "../../img/1.jpg"

export default () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} />
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/girls">Waifus</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
