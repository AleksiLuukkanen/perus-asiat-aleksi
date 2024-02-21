import React from "react";

const Testi = (props) => {
    return (
    <>
        <h1>
            Tää on {props.name}!
        </h1>
    </>
    );
}

const Tulos = () => {
    return <Testi name="PropsTesti" />
}

export default Tulos;