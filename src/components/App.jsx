import "../scss/App.scss";
import { useEffect, useState } from "react";
import getUsersfromApi from "../services/getUsersfromApi";
import Header from "./Header";
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
    
    let characterSelected;
    if (routeData !== null) {
        characterSelected = objects.find((character) => {
            return character.id === parseInt(routeData.params.id)
        });
    }
   
    

    return (
        <div className="page">
        <header>
            <Header />
        </header>
        <main>
            <Routes>
                <Route path="/" element={(
                    <>
                        <Filters onChangeName={changeName} />
                        <CharactersList charactersData={filteredCharacters} />
                    </>  
                )} />
                <Route path="/detail/:id" element={<CharacterDetail character={characterSelected} />} />
            </Routes>
        </main>
        </div>
    )
}

export default App
