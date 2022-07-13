import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Шумилов Евгений</p>
            <a href="https://github.com/jesdray?tab=repositories"
                className="footer__link"
                target="_blank">
                GitHub
            </a>
        </footer>
    )
}