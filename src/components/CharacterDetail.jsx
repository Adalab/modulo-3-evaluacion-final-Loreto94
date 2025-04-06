
function CharacterDetail ({ character }) {
    console.log(character);
    return (
        <section>
            <img src={character.image} alt={character.name} />
            <h4>{character.name}</h4>
            <p>Specie: {character.specie}</p>
            <p>Origin: LocatioName</p>
            <p>Status: </p>
            <p>Episodes: </p>
        </section>
    )
}

export default CharacterDetail;