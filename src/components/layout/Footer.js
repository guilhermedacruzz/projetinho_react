import React from "react"
import styles from "./Footer.module.css"

import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

export default () => {
    return(
        <footer className={styles.Footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>

            <p className={styles.copyright}><span>Waifus</span> &copy; 2021</p>
        </footer>
    )
}
