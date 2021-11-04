import loader from './loader.gif';
import './loader.css';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <img src={loader} alt="Cargando..." />
        </div>
    )
}

export default Loader;