import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";

const ProductSearch: React.FC = () => {
    const { dispatch } = useFilterContext();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_FILTERS', payload: { searchTerm: e.target.value } });
    };

    return (
        <Wrapper className="form-control">
            <input
                type="text"
                name="searchTerm"
                placeholder="search"
                className="search-input"
                onChange={handleSearchChange} />
        </Wrapper>
    )
}

export default ProductSearch

const Wrapper = styled.div`
margin-left: 2rem;
.search-input {
    padding: 0.5rem;
    background: var(--clr - grey - 10);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
}
.search-input::placeholder {
    text-transform: capitalize;
}
 `
