import "../scss/App.scss";
import { useEffect, useState } from "react";
import getUsersfromApi from "../services/getUsersfromApi";
import CharactersList from "./CharactersList";

function App() {
    const [objects, setObjects] = useState([]);

    useEffect(()=>{
        getUsersfromApi().then(characters => {
            setObjects(characters);
        })
    }, []) 

    return (
        <>
        <header>
            <h1>Rick y Morty</h1>
        </header>
        <main>
            <CharactersList charactersData={objects} />
        </main>
        </>
    )
}

export default App
