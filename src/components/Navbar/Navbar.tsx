import styled from 'styled-components'
import { NavLinks } from './NavLinks'
import CartButton from '../button/CartButton'

const Nav : React.FC = () => {
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
        </div>
        <NavLinks className='nav-links' />
        <CartButton />
      </div>
    </NavContainer>
  )
}

export default Nav

const NavContainer = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  margin-bottom: 0rem;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 125px;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    img{
      margin-left: 15px;

    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`
