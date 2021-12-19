import React from "react";

import styles from "./NewGirl.module.css"

import WaifuForm from "../waifus/WaifuForm";

export default () => {
    return(
        <div className={styles.NewGirl}>
            <h1>Criar Projeto</h1>
            <p>Crie sua esposa para depois adicionar skills!</p>
            <WaifuForm/>
        </div>
    )
}