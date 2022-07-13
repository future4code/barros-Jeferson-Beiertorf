import React from "react";
import { MyForm } from "../styled";

function etapa1(){
    return(
<MyForm>
    <form>
        <label>Qual seu nome?</label>
        <input type="text" name="nome" placeholder="Digite seu nome"/>

        <input type="text" name="idade" placeholder="Digite sua idade"/>
        <input type="text" name="email" placeholder="Digite seu email"/>
        <select name="">
            <option value="ensino medio incompleto"></option>
            <option value="ensino medio completo"></option>
            <option value="ensino superior incompleto"></option>
            <option value="ensino superior completo"></option>
        </select>
        <button type="submit"></button>
    </form>
</MyForm>
    )
}

export default etapa1;