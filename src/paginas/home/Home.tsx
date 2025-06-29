import Carrossel from '../../componentes/carrossel/carrossel';
import Footer from '../../componentes/footer/footer';
import Slide from '../../componentes/slide/slide';
import SlideExibeMais from '../../componentes/slideExibeMais/slideExibeMais';
import './home.css';

type Card = {
    textoDescricao: string,
    src: string,
    alt: string,
    link: string
};

type listaDeCards = Card[];

const Home = () => {
    const lista: listaDeCards = [
        {
            textoDescricao: 'Anéis',
            src: 'aneis.jpg',
            alt: 'anéis',
            link: 'aneis'
        }, {
            textoDescricao: 'Brincos',
            src: 'brincos.jpg',
            alt: 'brincos',
            link: 'brincos'
        }, {
            textoDescricao: 'Colares',
            src: 'colar.jpg',
            alt: 'colar',
            link: 'colares'
        }, {
            textoDescricao: 'Relógios',
            src: 'relógio.jpg',
            alt: 'relógio',
            link: 'relogios'
        }, {
            textoDescricao: 'Saltos',
            src: 'calca4.jpg',
            alt: 'teste',
            link: 'saltos'
        }];

    const lista1: listaDeCards = [
        {
            textoDescricao: 'Calçados',
            src: 'imagemCard1.jpg',
            alt: 'calçados',
            link: 'calcados'
        }, {
            textoDescricao: 'Calças',
            src: 'calca2.jpg',
            alt: 'calças',
            link: 'calcas'
        }, {
            textoDescricao: 'Jaquetas',
            src: 'teste.jpg',
            alt: 'teste',
            link: 'jaquetas'
        }, {
            textoDescricao: 'Bolsas',
            src: 'calca3.jpg',
            alt: 'teste',
            link: 'bolsas'
        }, {
            textoDescricao: 'Saltos',
            src: 'calca4.jpg',
            alt: 'teste',
            link: 'saltos'
        },{
            textoDescricao: 'Anéis',
            src: 'aneis.jpg',
            alt: 'anéis',
            link: 'aneis'
        }, {
            textoDescricao: 'Brincos',
            src: 'brincos.jpg',
            alt: 'brincos',
            link: 'brincos'
        }, {
            textoDescricao: 'Colares',
            src: 'colar.jpg',
            alt: 'colar',
            link: 'colares'
        }, {
            textoDescricao: 'Relógios',
            src: 'relógio.jpg',
            alt: 'relógio',
            link: 'relogios'
        }];
    return (
        <div className="principal">
            <div className='carrossel'>
                <Slide />
                <Carrossel espacoEntreCards={null} quantidadeCardsNaTela={null} loop={false} listaDeCards={lista1}/>
                <SlideExibeMais />
                <Carrossel espacoEntreCards={null} quantidadeCardsNaTela={null} loop={false} listaDeCards={lista} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;