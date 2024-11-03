import styled from "styled-components";

const ProductSearch: React.FC = () => {
    return (
        <Wrapper>
            <div className="form-control">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="search"
                    className="search-input" />
            </div>
        </Wrapper>
    )
}

export default ProductSearch

const Wrapper = styled.section`
.search-input {
    padding: 0.5rem;
    background: var(--clr - grey - 10);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
}
.search-input::placeholder {
    text-transform: capitalize;
}`