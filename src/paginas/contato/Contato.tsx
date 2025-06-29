import Footer from '../../componentes/footer/footer';
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import './contato.css';
import Formulario from './formulario/formulario';

const Contato = () => {
    type ProsBloco = {
        icone: any;
        texto: string;
        texto2?: string;
        link?: string;
    }
    const bloco = ({ icone, texto, texto2, link }: ProsBloco) => {
        return (
            <div className='cardContato'>
                <a href={`${link}`} className='linkCard'>
                    <div>
                        {icone}
                    </div>
                    <div className='texto'>
                        {texto}
                    </div>
                    <div className='textoAuxiliar'>
                        {texto2}
                    </div>
                </a>
            </div>
        );
    };
    return (
        <>
            <div className='espaco'>
                <div className='baseGrade'>
                    <div className='gradeCards'>
                        {bloco({ icone: <MdEmail className='icone' />, texto: 'Email', texto2: 'contato@TheUniverse.com', link: 'mailto:contato@TheUniverse.com' })}
                        {bloco({ icone: <RiWhatsappFill className='icone' />, texto: 'WhatsApp', texto2: '+55 (99) 9 9123-4567', link: 'https://api.whatsapp.com/send?phone=99991234567' })}
                        {bloco({ icone: <BsTelephoneFill className='icone' />, texto: 'Telefone', texto2: '+55 (99) 9 9123-4567', link: '#' })}
                        {bloco({ icone: <FaLinkedin className='icone' />, texto: 'Linkedin', link: 'https://www.linkedin.com/feed/' })}
                    </div>
                </div>
                <div className='formulario'>
                    {Formulario()}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contato;