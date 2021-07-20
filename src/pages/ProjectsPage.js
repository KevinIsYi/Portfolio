import React from 'react';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

const projects = [
    {
        id: 1,
        name: 'Sudoku Solver',
        image: '/assets/sudoku-preview.jpeg',
        link: 'https://ecstatic-albattani-219dd2.netlify.app/',
        description: 'Implemente',
        technologies: [
            {
                id: 1,
                name: 'VainillaJS',
                icon: 'fa-js',
                color: '#F7E018'
            },
            {
                id: 2,
                name: 'HTML',
                icon: 'fa-html5',
                color: '#F37731'
            },
            {
                id: 3,
                name: 'CSS',
                icon: 'fa-css3-alt',
                color: '#35A8DB'
            }
        ],
    }, {
        id: 1,
        name: 'Sudoku Solver',
        image: '/assets/sudoku-preview.jpeg',
        link: 'https://ecstatic-albattani-219dd2.netlify.app/',
        description: 'Implemente',
        technologies: [
            {
                id: 1,
                name: 'VainillaJS',
                icon: 'fa-js',
                color: '#F7E018'
            },
            {
                id: 2,
                name: 'HTML',
                icon: 'fa-html5',
                color: '#F37731'
            },
            {
                id: 3,
                name: 'CSS',
                icon: 'fa-css3-alt',
                color: '#35A8DB'
            }
        ],
    }, {
        id: 1,
        name: 'Sudoku Solver',
        image: '/assets/sudoku-preview.jpeg',
        link: 'https://ecstatic-albattani-219dd2.netlify.app/',
        description: 'Implemente',
        technologies: [
            {
                id: 1,
                name: 'VainillaJS',
                icon: 'fa-js',
                color: '#F7E018'
            },
            {
                id: 2,
                name: 'HTML',
                icon: 'fa-html5',
                color: '#F37731'
            },
            {
                id: 3,
                name: 'CSS',
                icon: 'fa-css3-alt',
                color: '#35A8DB'
            }
        ],
    }, {
        id: 1,
        name: 'Sudoku Solver',
        image: '/assets/sudoku-preview.jpeg',
        link: 'https://ecstatic-albattani-219dd2.netlify.app/',
        description: 'Implemente',
        technologies: [
            {
                id: 1,
                name: 'VainillaJS',
                icon: 'fa-js',
                color: '#F7E018'
            },
            {
                id: 2,
                name: 'HTML',
                icon: 'fa-html5',
                color: '#F37731'
            },
            {
                id: 3,
                name: 'CSS',
                icon: 'fa-css3-alt',
                color: '#35A8DB'
            }
        ],
    }, {
        id: 1,
        name: 'Sudoku Solver',
        image: '/assets/sudoku-preview.jpeg',
        link: 'https://ecstatic-albattani-219dd2.netlify.app/',
        description: 'Implemente',
        technologies: [
            {
                id: 1,
                name: 'VainillaJS',
                icon: 'fa-js',
                color: '#F7E018'
            },
            {
                id: 2,
                name: 'HTML',
                icon: 'fa-html5',
                color: '#F37731'
            },
            {
                id: 3,
                name: 'CSS',
                icon: 'fa-css3-alt',
                color: '#35A8DB'
            }
        ],
    }
]



export const ProjectsPage = () => {
    return (
        <div className="projects__container roboto flex f-wrap">
            {
                projects.map((project) => (
                    <ProjectCard key={project.id} projectInfo={project} />
                ))
            }
        </div>
    )
}
