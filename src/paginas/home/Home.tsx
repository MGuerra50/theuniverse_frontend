import Carrossel from '../../componentes/carrossel/carrossel';
import './home.css';
const Home = ()=>{
    return(
        <div className="principal">
            <h1 style={{color: 'red'}}>oi</h1>
            <div className='carrossel'>
                <Carrossel></Carrossel>
            </div>
        </div>
    );
}

export default Home;