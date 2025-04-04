import CharacterCard from "./CharacterCard";

function CharactersList ({ charactersData }) {
    return (
        <section>
            <ul>
                {
                  charactersData.map((character) => {
                    return <CharacterCard characterData={character} key={character.id} />
                  })  
                }
            </ul>
        </section>
    )
}

export default CharactersList; 