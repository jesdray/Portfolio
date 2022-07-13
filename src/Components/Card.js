import React from "react";

export default function Card(props) {
    console.log(props);

    return (
        <section className="card">
            <img src={props.img} alt="Скриншот сайта" className="card__image" />
            <div className="card__hud">
                <div className="card__box">
                    <p className="card__name">{props.name}</p>
                    <a className="card__link card__link_github" href={props.github} target="_blank" />
                    <a className="card__link card__link_io" href={props.githubIo} target="_blank" />
                </div>
            </div>
        </section >
    )
}