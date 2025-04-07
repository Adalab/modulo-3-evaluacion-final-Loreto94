import CharacterCard from "./CharacterCard";
import "../scss/components/CharactersList.scss";

function CharactersList ({ charactersData }) {
    return (
        <section>
            <ul>
                {
                  charactersData.map((character) => {
                    return <li key={character.id}><CharacterCard characterData={character} /></li>
                  })  
                }
            </ul>
        </section>
    )
}

export default CharactersList; 