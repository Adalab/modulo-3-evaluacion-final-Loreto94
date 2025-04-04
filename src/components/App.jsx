import "../scss/App.scss";
import { useEffect, useState } from "react";
import getUsersfromApi from "../services/getUsersfromApi";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

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
    
    const { pathname } = useLocation();
    const routeData = matchPath("/detail/:id", pathname);

    let idCharacter = undefined;
    if (routeData !== null){
        idCharacter = routeData.params.id;
    }
    console.log(idCharacter); 
    

    return (
        <>
        <header>
            <h1>Rick y Morty</h1>
        </header>
        <main>
            <Routes>
                <Route path="/" element={(
                    <>
                        <Filters onChangeName={changeName} />
                        <CharactersList charactersData={filteredCharacters} />
                    </>  
                )} />
                <Route path="/detail/:id" element={<CharacterDetail />} />
            </Routes>
            
        </main>
        </>
    )
}

export default App
