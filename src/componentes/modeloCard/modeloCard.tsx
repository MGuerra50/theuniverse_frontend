import { Link } from 'react-router-dom';
import './modeloCard.css';
import Tilt from 'react-parallax-tilt';

type Props = {
    children: any;
    textoDescricao?: string | null
    link?: string | null
}

const ModeloCard = ({ children, textoDescricao, link }: Props) => {
    return (
        <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.05}
        >
            <div className='principalCard'>
                <div className='estruturaCard'>
                    <Link to={`${link}`} className='linkCard'>
                        {children}
                        <div className='parteInterna'>
                            <h3>{textoDescricao}</h3>
                            <a href={`/${link !== null ? link : 'undefined'}`}>Ver Mais</a>
                        </div>
                    </Link>
                </div>
            </div>
        </Tilt>
    );
}
export default ModeloCard;