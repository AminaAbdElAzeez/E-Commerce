import { Link } from 'react-router-dom';
import './ErrorPage.css';
import Particle from '../../Components/Particle/Particle';

function ErrorPage() {
    return (
        <div className='error'>
            <Particle/>
            <div className='container'>
                <div className='error-info'>
                    <h2 className='error-404'>4<i className="bi bi-globe-central-south-asia"></i>4</h2>
                    <h3 className='error-title'>" page not found "</h3>
                    <p>we couldn't find the page you were looking for..!</p>
                    <Link to='/' className='error-link'>back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage