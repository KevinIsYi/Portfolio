import { Link } from 'react-router-dom';
import './landingPage.css';

export const LandingPage = () => {
    return (
        <main className="main-text center-xy roboto">
            <h1 className="gray-text">Less is More<span>-</span></h1>
            <Link to="/projects">- Explore Projects</Link>
        </main>
    )  
}
