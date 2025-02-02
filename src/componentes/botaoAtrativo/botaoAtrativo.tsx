import { Link } from 'react-router-dom';
import './botaoAtrativo.css';

type Props = {
    textoBotao: string | null;
}

const BotaoAtrativo = ({ textoBotao }: Props) => {
    return (
        <Link to='/teste' className='designDoBotao'>
            <div className='estruturaDoBotaoV2'>
                <div className='estruturaDoBotaoV2Parte2'>
                    <span className='textoBotaoV2'>{textoBotao}</span>
                </div>
            </div>
        </Link>
    );
}

export default BotaoAtrativo;