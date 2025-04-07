import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";

function CharacterCard ({ characterData }) {
    return (
        
            <Link to={`/detail/${characterData.id}`}>
                <img className="card-image" src={characterData.image} alt={characterData.name} />
                <div className="text">
                    <h4>{characterData.name}</h4>
                    <p>{characterData.specie}</p>
                </div> 
            </Link>
         
    )
}

export default CharacterCard;