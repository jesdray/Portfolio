import React from "react";
import gearIcon from '../images/header_gear.svg'
import { NavLink } from 'react-router-dom';

export default function header() {
    return (
        <header className="header">
            <form className="header__form">
                <button className="header__button" />
                <input className="header__input" placeholder="React" ></input>
            </form>
            <menu className="header__menu">
                <ul className="header__ul">
                    <li className="header__li">
                        <a href="https://github.com/jesdray?tab=repositories"
                            className="header__link"
                            target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li className="header__li">
                        <img src={gearIcon} alt="Настройки" className="header__settings" />
                    </li>
                </ul>
            </menu>
        </header>
    )
}