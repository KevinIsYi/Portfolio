export const ProjectCard = ({ projectInfo }) => {

    const { name, image, link, description, technologies } = projectInfo;

    return (
        <div className="projects__project-container shadow light-bk">
            <a
                href={link}
                target="_blank"
            >
                <img src={image} />
            </a>
            <h1 className="text-center bold blue-text">{name}</h1>
            <h3 className="bold">Technologies used:</h3>
            {
                technologies.map(({ id, name, icon, color }) => (
                    <div
                        key={id}
                        className="projects__technologies-cnt flex"
                    >
                        <i
                            className={`fab ${icon}`}
                            style={{
                                color
                            }}
                        />
                        <p className="bold">{name}</p>
                    </div>
                ))
            }
            <p className="bold">About: <span className="lighter">{description}</span></p>
            <a
                href={link}
                target="_blank"
                className="projects__link bold flex width-100 blue-bk transition zindex-top"
            >
                <i class="fas fa-link"></i>
                <p>Visit</p>
            </a>
        </div>
    )
}
