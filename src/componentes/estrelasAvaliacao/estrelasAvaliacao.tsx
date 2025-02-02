import './estrelasAvaliacao.css';

type NotaEstrelas = {
    nota: number;
};

const EstrelasAvaliacao = ({ nota }: NotaEstrelas) => {
    const estrelas = Array.from({ length: 5 }, (_, index) => {
        return index < nota ? '★' : '☆';
    });
    return (
        <div className='configuracaoEstrelas' title='Toque para informações'>
            {estrelas.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
};

export default EstrelasAvaliacao;