import { Link } from "react-router-dom";

type ModeloBotaoProps = {
    to: string;
    texto: string;
}

const ModeloBotao = ({ to, texto }: ModeloBotaoProps) => {
    return (
        <div style={{width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center'}}>
            <Link to={to} style={{textDecoration: 'none'}}>
                <span style={{color: '#ffffff'}}>{texto}</span>
            </Link>
        </div>
    );
}

export default ModeloBotao;