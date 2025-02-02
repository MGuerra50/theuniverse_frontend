import Footer from '../../componentes/footer/footer';
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import './contato.css';

const Contato = () => {
    type ProsBloco = {
        icone: any;
        texto: string;
        texto2?: string;
    }
    const bloco = ({ icone, texto, texto2 }: ProsBloco) => {
        return (
            <div className='cardContato'>
                <div>
                    {icone}
                </div>
                <div className='texto'>
                    {texto}
                </div>
                <div className='textoAuxiliar'>
                    {texto2}
                </div>
            </div>
        );
    };
    return (
        <>
            <div className='espaco'>
                <div className='gradeCards'>
                    {bloco({ icone: <MdEmail className='icone' />, texto: 'Email', texto2: 'contato@TheUniverse.com' })}
                    {bloco({ icone: <RiWhatsappFill className='icone' />, texto: 'WhatsApp', texto2: '+55 (99) 9 9123-4567' })}
                    {bloco({ icone: <BsTelephoneFill className='icone' />, texto: 'Telefone', texto2: '+55 (99) 9 9123-4567' })}
                    {bloco({ icone: <FaLinkedin className='icone' />, texto: 'Linkedin' })}
                </div>
                <div className='formulario'>
                    <h1>teste formulario</h1>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contato;