import React from "react"

import Input from "../form/Input"
import Select from "../form/Select"
import Submit from "../form/Submit"

import styles from "./WaifuForm.module.css"

export default (props) => {
    return (
        <form className={styles.WaifuForm}>

            <Input 
                type="text" 
                text="Nome"
                value=""
                placeholder="Digite o nome dela"
                name="name"
            />

            <Input 
                type="number" 
                text="Orçamento"
                value="1000000"
                placeholder="Digite o orçamento"
                name="budget"
            />

            <Select
                name="category_id"
                text="Selecione a Personalidade"
            />

            <Submit
                text={props.btnText}
            />
        </form>
    )
}