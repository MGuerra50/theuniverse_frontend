import './modeloCard.css';
import Tilt from 'react-parallax-tilt';

const ModeloCard = () => {
    return (
        <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.05}
        >
            <div className='principalCard'>
                <div className='estruturaCard'>
                    <div className='parteInterna'>
                        <h2>01</h2>
                        <h3>Card Um</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href='/cardClidado'>Mais Informações</a>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}
export default ModeloCard;