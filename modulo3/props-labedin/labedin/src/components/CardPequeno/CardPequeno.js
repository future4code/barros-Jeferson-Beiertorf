import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h5>{ props.nome }</h5>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;