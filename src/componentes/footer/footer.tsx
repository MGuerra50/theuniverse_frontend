import './footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='baseFooter'>
            <div className='lista'>
                <h1 className='tituloFooter'>INSTITUIONAL</h1>
                <Link to='/termosDeUso' className='links'>
                    <p className='itensDaLista'>Termos de Uso</p>
                </Link>
                <Link to='/politicaseprivacidade' className='links'>
                    <p className='itensDaLista'>Política de Privacidade</p>
                </Link>
            </div>
            <div>
                <h1 className='tituloFooter' id='social'>SOCIAL</h1>
                <FaLinkedin className='iconesSociais' />
                <FaSquareInstagram className='iconesSociais' />
                <FaYoutube className='iconesSociais' />
                <FaFacebookSquare className='iconesSociais' />
                <FaPinterestSquare className='iconesSociais' />
            </div>
            <div className='lista'>
                <h1 className='tituloFooter'>SOBRE</h1>
                <Link to='/sobre' className='links'>
                    <p className='itensDaLista'>Sobre nós</p>
                </Link>
                <Link to='/contato' className='links'>
                    <p className='itensDaLista'>Contatos</p>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;