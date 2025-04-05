import { Link } from "react-router-dom";

function CharacterCard ({ characterData }) {
    return (
        <li>
            <Link to={`/detail/${characterData.id}`}>
                <img src={characterData.image} alt={characterData.name} />
                <h4>{characterData.name}</h4>
                <p>{characterData.specie}</p>
            </Link>
        </li>    
    )
}

export default CharacterCard;