import { useEffect, useState } from 'react';
import './background.css';

export const Background = () => {

    const [animations, setAnimations] = useState([]);
    
    
    useEffect(() => {
        const { innerWidth } = window;
        const figures = ['shape', 'shape circle', 'triangle'];
        const colors = ['#ef0f73', '#ff6803', '#333399'];

        const fillAnimations = [];
        const numberOfFigures = figures.length;
        const numberOfShapes = Math.round(innerWidth / 50);

        for (let key = 1; key <= numberOfShapes; ++key) {
            const random = Math.random();
            const figurePosition = Math.floor(random * numberOfFigures);
            const figure = figures[figurePosition];
            const animationDelay = `${random * 50}s`;
            const left = Math.floor(random * innerWidth);
            const colorFigure = colors[Math.floor(Math.random() * 3)];

            const style = {
                left,
                animationDelay,
            };
            
            const figureColor = figurePosition === 2 ? ['borderBottom', `50px solid ${ colorFigure }`] : ['backgroundColor', colorFigure];
            style[figureColor[0]] = figureColor[1];

            fillAnimations.push([key, figure, style]);
        }
        setAnimations(fillAnimations);
        
    }, [setAnimations]);



    return (
        <>
            {
                    animations.map(([key, figure, style]) => (
                        <div
                            key={key}
                            className={`anim ${figure}`}
                            style={style}
                        />
                    ))
            }
        </>
    )
}