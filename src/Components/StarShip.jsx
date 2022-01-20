import React, { useEffect, useState } from "react";
import Card from "./Card";

const url = `https://www.swapi.tech/api/`;
let shipNames = [];
function StarShip(props) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(url + "starships/")
            .then(res => res.json())
            .then(function (data) {
                let array = [];
                for (let i = 0; i < data.results.length; i++) {
                    array.push(data.results[i].name);
                }
                console.log(array)
                let shipItems = array.map((name) => {
                    return <Card Header={name} key={name} />
                });
                setItems(shipItems);
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <div className="card-container">
            {items}
        </div>
    )
}

function getStarName() {

    fetch(url + "starships/")
        .then(res => res.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                shipNames.push(data[i]);
            }
            console.log(data.results)
        })
        .catch(err => console.error(err));
}

export default StarShip;