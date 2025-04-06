import "../scss/components/CharacterDetail.scss";

function CharacterDetail ({ character }) {
    console.log(character);
    return (
        <section>
            <img src={character.image} alt={character.name} />
            <div className="detailText">
                <h4>{character.name}</h4>
                <p>Specie: {character.specie}</p>
                <p>Origin: LocatioName</p>
                <p>Status: </p>
                <p>Episodes: </p>
            </div>
        </section>
    )
}

export default CharacterDetail;