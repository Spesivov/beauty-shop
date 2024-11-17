import styled from "styled-components";
import ProductGrid from "../components/ProductGrid";
import ProductSearch from "../components/ProductSearch";
import CartSlider from "../components/slider/CartSlider";

export function Store() {
  return (
    <main>
      <Wrapper>
        <div className="products">
          <ProductSearch />
          <ProductGrid />
          <CartSlider />
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: flex;
    justify-content: space-between;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`