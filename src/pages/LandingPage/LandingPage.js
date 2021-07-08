import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <main className="main-text absolute center-abs-xy roboto">
            <h1 className="gray-text">Less is More<span>-</span></h1>
            <Link to="/projects">- Explore Projects</Link>
        </main>
    )  
}
