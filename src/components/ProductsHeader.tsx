import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductsHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link>/ {title}
                </h3>
            </div>

        </Wrapper>
    )
}

export default ProductsHeader

const Wrapper = styled.section`
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`