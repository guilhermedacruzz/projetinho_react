import React from "react"

import styles from "./Select.module.css"

export default ({ text, name, options, handleOnChange, value }) => {
    return (
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}: </label>

            <select name={name} id={name}>
                <option disabled selected >Personalidades</option>
            </select>
        </div>
    )
}