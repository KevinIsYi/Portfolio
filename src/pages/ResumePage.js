export const ResumePage = () => {

    return (
        <div className="resume__container fixed roboto">
            <div className="resume absolute center-abs-xy">
                <div className="resume__vertical-lines-container absolute flex">
                    <div />
                    <div />
                </div>
                <div className="resume__horizontal-lines-container absolute flex">
                    <div />
                    <div />
                </div>
                <div className="resume__right-circle hidden absolute yellow-bk" />
                <div className="resume__bottom-rectangle hidden absolute yellow-bk" />
                <div className="resume__content grid">
                    <div className="resume__personal-info-container relative">
                        <div className="resume__name text-center relative lobster">
                            <h1 className="absolute center-abs-xy">Kevin Rodríguez</h1>
                        </div>
                        <div className="resume__about-me-content">
                            <h1>Contact</h1>
                            <div>
                                <p><span>Email:</span> rodriguezkevin95@gmail.com</p>
                                <p><span>Phone:</span> +52 3318357366</p>
                            </div>
                        </div>
                    </div>
                    <div className="resume__info-content-container relative center-x">
                        <h1>Frontend Developer</h1>
                        <div className="resume-info-card">
                            <h1>Profile</h1>
                            <div className="resume__info-content">
                                <p>
                                    Highly passionate about programming and any topic related to it. I do see coding as a hobbie, most of my free time goes to
                                    learning new technologies, techniques or improving my algorithmic skills.
                                </p>
                            </div>
                        </div>
                        <div className="resume-info-card">
                            <h1>Education & Achievements</h1>
                            <div className="resume__info-content">
                                <p className="bold">&#8226; Bachelor Degree at Universidad de Guadalajara (CUCEI)</p>
                                <p className="lighter">August 2018 - Till the Date</p>
                            </div>
                            <div className="resume__info-content">
                                <p className="bold">&#8226; Teacher at Algorithmics Club CUCEI</p>
                                <p className="lighter">August 2020 - February 2021</p>
                            </div>
                        </div>
                        <div className="resume-info-card">
                            <h1>Work Experience</h1>
                            <div className="resume__info-content">
                                <p className="bold">&#8226; Universidad de Guadalajara (February 2021 - July 2021)</p>
                                <p className="lighter"><span className="bold">Frontend Developer: </span>I Worked as social service developing virtual incubator website for UDG with ReactJS.</p>
                            </div>
                            <div className="resume__info-content">
                                <p className="bold">&#8226; Systec Solutions (March 2021 - Till the Date)</p>
                                <p className="lighter"><span className="bold">Frontend Developer: </span>I Worked developing real-time application with NextJS and socket.io</p>
                            </div>
                        </div>
                        <div className="resume-info-card">
                            <h1>Skills</h1>
                            <div className="resume__info-content">
                                <p className="bold">&#8226; Programming Languages</p>
                                <p className="lighter">JavaScript (and TypeScript)</p>
                                <p className="lighter">C++</p>
                            </div>
                            <div className="resume__info-content">
                                <p className="bold">&#8226; Web development technologies</p>
                                <div className="resume__technologies grid">
                                    <div>
                                        <p className="lighter">ReactJS</p>
                                        <p className="lighter">NodeJS</p>
                                        <p className="lighter">ExpressJS</p>
                                    </div>
                                    <div>
                                        <p className="lighter">MongoDB</p>
                                        <p className="lighter">SASS</p>
                                        <p className="lighter">VainillaJS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
