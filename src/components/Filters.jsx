import FilterName from "./FilterName";

function Filters ({ onChangeName }) {
    return (
        <form>
            <FilterName onChangeName={onChangeName} />
        </form>
    )
}



export default Filters;