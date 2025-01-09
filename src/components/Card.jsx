import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
function Card(
    {
        // image = "https://picsum.photos/600/400",
        // title,
        // tags = "Tags non presenti",
        // content = "Descrizione non presente",
        data,
        onDeletePost
    }) {
    const [pippo, setPippo] = useState(false);
    // function canc(e) {
    //     e.preventDefault();
    //     onDeletePost(data.id);
    // }

    // const [numero, setNumero] = useState(10);
    function toggleActive() {
        setPippo(!pippo);
    }
    // function incr(e) {
    //     e.stopPropagation();
    //     setNumero(numero + 100);
    // }
    return (
        <div
            className={`card ${style.cardEffect} ${pippo ? style.isActive : ""}`}
            onClick={toggleActive}
        >
            <img
                src={data.immagine}
                className={`card-img-top ${style.cardImg}`}
                alt={data.titolo}
            />
            <div className="card-body">
                <h5 className="card-title">{data.titolo}</h5>
                <p className="card-text">{data.contenuto}</p>
                <div className="pb-2">{data.tags.join(", ")}</div>
                <Link to={`/posts/${data.id}`}></Link>
                {/* <div>{numero}</div> */}
                <button onClick={onDeletePost}>
                    Cancella
                </button>
                {/* <button onClick={incr}>Incrementa</button> */}
            </div>
        </div>
    );
}

export default Card;