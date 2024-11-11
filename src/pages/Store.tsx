import styled from "styled-components";
import ProductsHeader from "../components/ProductsHeader";
import ProductGrid from "../components/ProductGrid";
import ProductSearch from "../components/ProductSearch";
import CartSlider from "../components/slider/CartSlider";

export function Store() {
  return (
    <main>
      <ProductsHeader title='Products' />
      <Wrapper>
        <div className="section-center products">
          <ProductSearch />
          <ProductGrid></ProductGrid>
          <CartSlider />
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`