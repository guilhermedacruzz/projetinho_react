import React from "react";
import styles from "./Home.module.css"

import image from "../../img/2.png"

import LinkButton from "../layout/LinkButton";

export default () => {
    return (
        <section className={styles.Home}>
            <h1>Bem vindo ao <span>Criador de Waifus</span></h1>
            <p>Comece a criar suas esposas agora mesmo</p>
            <LinkButton
                to="/new_anime_girl"
                text="Criar Waifu"
            />
            <img src={image} />
        </section>
    )
}