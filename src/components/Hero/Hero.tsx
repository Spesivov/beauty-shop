import styled from 'styled-components'
import ShopNowButton from '../button/ShopNowButton'
import { BackgroundSlider } from '../slider/BackgroundSlider'

export function Hero() {
  return (
    <Wrapper className='section-right'>
      <section className='content'>
        <HeroText />
        <ShopNowButton />
      </section>
      <BackgroundSlider />
    </Wrapper>
  )
}

export default Hero

const HeroText = () => {
  return (
    <>
      <h1>
        hight quality <br />
        product for your family
      </h1>
      <p>
        Quality products imported from Europe and USA
      </p>
    </>
  )
}

const Wrapper = styled.section`
  min-height: 92vh;
  display: grid;
  
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: 100%;
    grid-template-columns: 1fr 1.5fr;
    gap: 8rem;
    h1 {
      display: flex;
      width: fit-content;
    }
    p {
      display: flex;
      width: fit-content;
      font-size: 1.25rem;
    }   
    .content{
      display: flex;
      justify-content: flex-start;
      flex-direction: column;  
      width: fit-content;
      margin: 4rem 0 0rem 4rem;
    }
    .hero-btn {
      display: flex;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      width: fit-content;
    }
    .img-container {
      display: flex;
      justify-content: flex-end;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: var(--radius); 
    }
    .image-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: opacity 1s ease-in-out;
      opacity: 0;
      border-radius: inherit;
    }
    .image-layer.active {
      opacity: 1;
    }
  }
`
