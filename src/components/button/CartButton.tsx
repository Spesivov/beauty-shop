import { styled } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/Cart_Context';
import CartSlider from '../slider/CartSlider';

const CartButton: React.FC = () => {
  const { cartItems, dispatch, isCartSliderVisible } = useCartContext();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <Wrapper className='cart-btn-wrapper'>
      <span className='cart-container' onClick={handleToggle}>Cart
        <FaShoppingCart />
        <span className='cart-value'>{cartItems.length}</span>
      </span>
      <CartSlider isVisible={isCartSliderVisible} />
    </Wrapper>
  )
}

export default CartButton

const Wrapper = styled.div`
   .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
  }
  .cart-container {
    display: flex;
    align-items: space-between;
    position: relative;
    font-size: 1.2rem;
    left: 100px; 
    svg {
      height: 1.4rem;
      margin-left: 5px;
    }
  }
   .cart-container:hover {
    cursor: pointer;
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-red-dark);
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 10px;
  }
}
`