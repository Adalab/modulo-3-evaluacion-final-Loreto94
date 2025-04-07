import "../scss/components/CharacterDetail.scss";

function CharacterDetail ({ character }) {
    console.log(character);
    if (!character) {
        return <p className="character-not-found">Personaje no encontrado</p>
    }
    return (
            <div className="container-card">
                <section className="detail-card">
                <img className="detail-image" src={character.image} alt={character.name} />
                <div className="detail-text">
                    <h4>{character.name}</h4>
                    <p>Specie: {character.specie}</p>
                    <p>Origin: </p>
                    <p>Status: </p>
                    <p>Episodes: </p>
                </div>
            </section>
            </div>
    )
}

export default CharacterDetail;