import { useEffect, useState } from 'react';

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
            const figurePosition = Math.floor(random * numberOfFigures); // [0, figures.length - 1]
            const figure = figures[figurePosition]; // Name of a figure
            const animationDelay = `${random * 50}s`; // Random number between [0, 50]
            const left = Math.floor(random * innerWidth); // position: fixed; left: ?
            const colorFigure = colors[Math.floor(Math.random() * 3)]; // Selection of color

            const style = {
                left,
                animationDelay,
                animationDuration: `${random * 50 + 35}s` // Random number between 1 and 10
            };

            const figureColor = figurePosition === 2 // If it is a triangle, css is 'borderBottom: 50px solid color', else 'backgroundColor: color'
                ? ['borderBottom', `50px solid ${colorFigure}`]
                : ['backgroundColor', colorFigure];
            style[figureColor[0]] = figureColor[1]; // Add atribute to style

            fillAnimations.push({ key, figure, style });
        }
        setAnimations(fillAnimations);

    }, [setAnimations]);

    return (
        <div className="background">
            {
                animations.map(({ key, figure, style }) => (
                    <div
                        key={key}
                        className={`anim ${figure}`}
                        style={style}
                    />
                ))
            }
        </div>
    )
}