import React from "react";
import styles from "./Container.module.css"

export default (props) => {
    return(
        <div className={`${styles.Container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}