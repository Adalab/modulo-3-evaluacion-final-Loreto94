//Es js porque no es un componente

const getUsersfromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            const parsedCharacters = data.results.map((character) => {
                return (
                    {
                        id: character.id,
                        name: character.name,
                        specie: character.species,
                        image: character.image
                    }
                )
            })
            return parsedCharacters;
        })
}

export default getUsersfromApi;