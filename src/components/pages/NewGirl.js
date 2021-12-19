import React from "react";

import styles from "./NewGirl.module.css"

import WaifuForm from "../waifus/WaifuForm";

export default () => {
    return(
        <div className={styles.NewGirl}>
            <h1>Criar Waifu</h1>
            <p>Crie sua esposa para depois adicionar skills!</p>
            <WaifuForm btnText="Criar Waifu"/>
        </div>
    )
}