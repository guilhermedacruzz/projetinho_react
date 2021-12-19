import React from "react"

export default () => {
    return (
        <form>

            <div>
                <input type="text" placeholder="Digite o nome dela: " />
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento: " />
            </div>

            <div>
                <select name="category_id">
                    <option disabled selected >Selecione a Personalidade</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar Waifu" />
            </div>
        </form>
    )
}