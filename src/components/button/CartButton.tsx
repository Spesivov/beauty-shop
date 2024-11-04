import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../../context/Cart_Context'

const CartButton: React.FC = () => {
  const { cartItems } = useCartContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' aria-label='Go to cart'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{cartItems.length}</span>
        </span>
      </Link>
    </Wrapper>
  )
}

export default CartButton

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 25px;

   .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    justify-content: relative
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    right: -30px;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-red-dark);
    width: 16px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
}
`