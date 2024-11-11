import { useCartContext } from "../../context/Cart_Context";
import { FaPlus, FaMinus, FaTrash, FaTimes } from 'react-icons/fa';
import styled from "styled-components";

interface CartSliderProps {
  isVisible: boolean;
}

const CartSlider: React.FC<CartSliderProps> = ({ isVisible }) => {
  const { cartItems, dispatch, getTotalPrice, increaseProductQuantity, decreaseProductQuantity, calculateProductPrice, removeProduct, getProductCount } = useCartContext();

  const closeSlider = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const totalPrice = getTotalPrice();

  return (
    <Wrapper className={`cart-slider ${isVisible ? 'visible' : ''}`}>
      <h4 className="cart-header">Shopping Cart
        <span className="close-cart" onClick={closeSlider}>
          <FaTimes />
        </span>
      </h4>
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="items-details">
                <h4>{item.title}</h4>
                <h5>${calculateProductPrice(item.id)}</h5>
              </div>
              <div className="product-actions">
                <span className="add-quantity" onClick={() => increaseProductQuantity(item.id)}>
                  <FaPlus />
                </span>
                <span className="product-count">{getProductCount(item.id)}</span>
                <span className="remove-quantity" onClick={() => decreaseProductQuantity(item.id)}>
                  <FaMinus />
                </span>
              </div>
              <div>
                <div className="remove-product" onClick={() => removeProduct(item)}>
                  <FaTrash />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="product-checkout">
        <h4>Total: ${totalPrice}</h4>
        <button className="btn btn-checkout">Checkout</button>
      </div>
    </Wrapper>
  );
};

export default CartSlider;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: #fff;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.visible {
    transform: translateX(0);
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }

  .cart-items {
    padding: 1rem;
    overflow-y: auto;
    max-height: 600px;
    overflow-y: auto;
  }

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    border-radius: 20px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
    height: 100px;
    padding: 1rem;
    box-sizing: border-box;
  }

  .cart-item img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 1rem;
  }

  .cart-item h4 {
    display: flex;
    margin: 0.5rem 0 0.5rem 1rem;
    font-size: 0.9rem;
    max-width: 300px; 
  }
  
  .item-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1; 
    max-width: 200px;
 }

  .cart-item h5 {
    margin: 1rem 0 0.5rem 1rem;
    font-size: 0.875rem;
    color: #888;
  }

  .remove-product {
    background: none;
    border: none;
    color: #f00;
    cursor: pointer;
    margin-top: 4rem;
  }

  .product-actions {
    display: flex;
    align-items: space-between;
    gap: 10px;
    cursor: pointer;
  }
  
  .product-checkout {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    max-height: 100px;
  }

  .product-checkout h4 {
    max-width: 300px;
    max-height: 100px;
    padding: 1rem;
    margin: 1rem;
  }
 
  .btn-checkout {
    background-color: white;
    color: var(--clr-grey-1);
    padding: 1rem;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
}
`;
