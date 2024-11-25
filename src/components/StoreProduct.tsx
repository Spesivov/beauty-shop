import Product from '../types/Product.tsx'
import styled from "styled-components"
import { StarRating } from "./StarRating.tsx"
import { formatPrice } from "../utils/utils.tsx"
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../context/Cart_Context.tsx'

const StoreProduct: React.FC<{ product: Product }> = ({ product }) => {
  const { cartItems, dispatch } = useCartContext();
  const handleAddToCart = () => {
    if (!cartItems.find((item) => item.id === product.id)) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  }

  return (
    <Wrapper>
      <div className="product-container">
        <img src={product.image} />
        <div className="product-content">
          <h5>{product.title}</h5>
          <p className='product-category'>{product.category}</p>
          <StarRating rating={product.rating.rate} />        
        </div>
        <footer>
            <p className="price">{formatPrice(product.price)}</p>
            <button className='product-cart' onClick={handleAddToCart}>
              <FaShoppingCart />
            </button>
          </footer>
      </div>
    </Wrapper>
  )
}

export default StoreProduct

const Wrapper = styled.article`
  .product-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    max-height: 400px;
    max-width: 300px;
    margin-right: 2rem;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  }

  img {
    padding: 1rem;
    width: 100%;
    display: block;
    object-fit: contain;
    border-radius: inherit;
    transition: var(--transition);
  }

  .product-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin: 0rem 0.5rem 0.5rem 1rem;
  }
  
  footer h3,
  footer p.price 
  { 
    color: var(--clr-black);
    letter-spacing: var(--spacing);
  }

  .stars {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  .star {
    color: #ffd700;
  }
  .product-cart {
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: var(--transition);
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    max-height: 35px;
  }
  .product-cart:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  .product-category {
    font-size: 0.75rem;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    margin-bottom: auto;
  }
  .product-content h5 {
    width: 100%;
    height: 3em; 
    overflow: hidden;
    margin-bottom: 0.5rem;
    line-height: 1.5em;
}
`