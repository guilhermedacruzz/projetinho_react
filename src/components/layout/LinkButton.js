import React from "react"
import { Link } from "react-router-dom"
import styles from "./LinkButton.module.css"

export default (props) => {
    return(
        <Link 
            className={styles.LinkButton} 
            to={props.to}
        >
            {props.text}
        </Link>
    )
}