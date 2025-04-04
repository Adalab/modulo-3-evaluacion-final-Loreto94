
function FilterName ({ onChangeName }) {
    const handleChangeName = (event) => {
        onChangeName(event.target.value);
    }

    return (
        <div>
            <label htmlFor="name">Nombre del personaje: </label>
            <input type="text" id="name" onChange={handleChangeName} />
        </div>
    )
}

export default FilterName;