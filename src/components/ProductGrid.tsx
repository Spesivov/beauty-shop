import styled from 'styled-components'
import Product from './StoreProduct.tsx'
import { useProductsContext } from '../context/ProductContext'
import { Loader } from './Loader.tsx';

const ProductGrid: React.FC = () => {
  const { allProducts } = useProductsContext();
  const { areProductsLoading } = useProductsContext();

  if (areProductsLoading) {
    return <Loader />
  }

  return (
    <Wrapper>
      <div className='products-container'>{
        allProducts.map(product => {
          return <Product key={product.id} product={product}></Product>
        })
      }
      </div>
    </Wrapper>
  )
}

export default ProductGrid

const Wrapper = styled.section`
img {
  height: 175px;
  width: 100%;
  object-fit: contain;
  background-color: white;
}

.products-container {
  display: grid;
  gap: 2rem 1.5rem;
}

@media (min-width: 992px) {
  .products-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1170px) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
`