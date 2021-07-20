export const Footer = () => {
    return (
        <footer className="footer flex fixed width-100 light-bk">
            <a
                className="footer__link-container roboto bold flex transition"
                target="_blank"
                href="https://www.linkedin.com/in/kevin-rodr%C3%ADguez-3360b31ba/"
                rel="noreferrer"
            >
                <p>Linkedin</p>
                <i className="fab fa-linkedin" />
            </a>
            <div className="footer__line-divisor" />
            <a
                className="footer__link-container roboto bold flex transition"
                target="_blank"
                href="https://github.com/KevinIsYi"
                rel="noreferrer"
            >
                <p>Github</p>
                <i className="fab fa-github" />
                
            </a>
            <div className="footer__line-divisor" />
            <a
                className="footer__link-container roboto bold flex transition"
                target="_blank"
                href="https://twitter.com/KevinIsYi"
                rel="noreferrer"
            >
                <p>Twitter</p>
                <i className="fab fa-twitter" />
            </a>
        </footer>
    )
}
