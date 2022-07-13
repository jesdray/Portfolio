import React from "react";
import data from "../utils/utils";
import Card from "./Card";

export default function Main(props) {
    //data.map((i) => console.log(i.name))

    return (
        <main className="main">
            <div className="main__content">
                {
                    data.map((i) =>
                        <Card
                            key={i.id}
                            img={i.img}
                            name={i.name}
                            github={i.github}
                            githubIo={i.githubIo}
                        />
                    )
                }
            </div>
        </main>
    )
}