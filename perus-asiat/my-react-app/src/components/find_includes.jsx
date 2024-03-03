import React from "react";

function Autot() {
    const autoja = ["punanen auto", "sininen auto", "keltaset autot"]

    const etsiAuto = autoja.find(autoja => autoja.endsWith("t"));

    const sininenAuto = autoja.includes("sininen auto");

    return (
        <>
        <h1>FINDS JA INCLUDES TESTI</h1>
        <p>Autot jotka loppuu kirjaimeen "t": {etsiAuto}</p>
        <p>Onko listassa sininenauto? {sininenAuto ? "Kyllä" : "Ei"}</p>
        </>

    );
}

export default Autot;