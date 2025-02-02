import Carrossel from '../../componentes/carrossel/carrossel';
import Footer from '../../componentes/footer/footer';
import Slide from '../../componentes/slide/slide';
import SlideExibeMais from '../../componentes/slideExibeMais/slideExibeMais';
import './home.css';
const Home = ()=>{
    return(
        <div className="principal">
            <div className='carrossel'>
                <Slide/>
                <Carrossel espacoEntreCards={null} quantidadeCardsNaTela={null} loop={false}/>
                <SlideExibeMais />
                <Carrossel espacoEntreCards={null} quantidadeCardsNaTela={null} loop={false}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;