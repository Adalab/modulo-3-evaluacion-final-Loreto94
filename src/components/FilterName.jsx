import "../scss/components/FilterName.scss";

function FilterName ({ onChangeName }) {
    const handleChangeName = (event) => {
        onChangeName(event.target.value);
    }

    return (
        <form>
            <label htmlFor="name">Nombre del personaje: </label>
            <input className="input" type="text" id="name" onChange={handleChangeName} />
        </form>
    )
}

export default FilterName;