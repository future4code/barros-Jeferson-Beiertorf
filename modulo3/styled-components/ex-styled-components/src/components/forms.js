import React,{useState} from "react";
import {Form} from "../style"

function Forms(){
    const [inputRemetente, setInputRemetente] = useState();
    const [inputMsg, setInputMsg] = useState();
    return(
            <Form>
                <label>
                    Remetente:
                    <input type='text'/>
                </label>
                <label>
                    Msg:
                    <input type='text'/>
                </label>
                <button>Enviar Mensagem</button>
            </Form>
    )
}

export default Forms