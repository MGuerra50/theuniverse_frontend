import { useState } from 'react';
import './exibeTamanhos.css';

const ExibeTamanhos = () => {
    const [botaoSelecionado, setBotaoSelecionado] = useState(-1);
    const listaDeTamanhos = ['PP', 'P', 'M', 'G', 'GG'];
    const botaoTamanhos = () => {
        return listaDeTamanhos.map((tamanho, index) => (
            <button
                key={index}
                className={botaoSelecionado===index?'botaoSelecionado':'botaoTamanhos'}
                onClick={() => { setBotaoSelecionado(index) }}
            >
                {tamanho}
            </button>
        ));
    };
    return (
        <div>
            <h5>Tamanhos: </h5>
            {botaoTamanhos()}
        </div>
    );
};

export default ExibeTamanhos;