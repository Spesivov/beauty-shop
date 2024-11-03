import Product from '../types/Product.tsx'
import styled from "styled-components"
import { StarRating } from "./StarRating.tsx"
import { formatPrice } from "../utils/utils.tsx"
import { FaShoppingCart } from 'react-icons/fa'

const StoreProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={product.image} />
        <div className="product-content">
          <h5>{product.title}</h5>
          <StarRating rating={product.rating.rate} />
          <p>{product.description}</p>
          <footer>
            <p className="price">{formatPrice(product.price)}</p>
            <div className='product-cart'>
              <FaShoppingCart />
            </div>
          </footer>
        </div>
      </div>
    </Wrapper>
  )
}

export default StoreProduct

const Wrapper = styled.article`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  }

  img {
    margin-top: 1rem;
    width: 100%;
    display: block;
    object-fit: contain;
    border-radius: inherit;
    transition: var(--transition);
  }

  .product-content {
    margin: 1rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
  
  footer h3,
  footer p.price 
  { 
      margin-top: 1rem;
    color: var(--clr-black);
    letter-spacing: var(--spacing);
  }

  .stars {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .star {
    color: gold;
  }
  
  .product-cart {
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: var(--transition);
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px;
  }

  .product-cart:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`