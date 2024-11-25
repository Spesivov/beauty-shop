import styled from "styled-components";
import ProductSearch from "./ProductSearch";
import CategoryDropdown from "./dropdown/CategoryDropdown";

const ProductExporer: React.FC = () => {
    return (
        <Wrapper>
            <ProductSearch />
            <CategoryDropdown />
        </Wrapper>
    )
}

export default ProductExporer;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
`;