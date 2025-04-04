import "../scss/App.scss";
import { useEffect, useState } from "react";
import getUsersfromApi from "../services/getUsersfromApi";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
    const [objects, setObjects] = useState([]);
    const [filterName, setFilterName] = useState("");

    useEffect(()=>{
        getUsersfromApi().then(characters => {
            setObjects(characters);
        })
    }, [])
    
    const changeName = (inputValue) => {
        setFilterName(inputValue);
    }

    const filteredCharacters = objects.filter((object) => {
        return object.name.toLowerCase().includes(filterName);
    })
    console.log(filteredCharacters);

    return (
        <>
        <header>
            <h1>Rick y Morty</h1>
        </header>
        <main>
            <Filters onChangeName={changeName} />
            <CharactersList charactersData={filteredCharacters} />
        </main>
        </>
    )
}

export default App
