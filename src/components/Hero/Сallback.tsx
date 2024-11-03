import styled from 'styled-components';
import { SendMessage } from '../../utils/CallBackSender'

export const СallbackForm: React.FC = () => {
  return (
    <Wrapper className="callback-wrapper">
      <div className="callback-content">
        <p>
          Request free consult with our manager.
        </p>
        <PhoneInput />
        <SubmitCall />
      </div>
    </Wrapper>
  )
}

export const SubmitCall: React.FC = () => {
  return (
    <button
      className="btn submit-btn" onClick={SendMessage}>
      Submit
    </button>
  )
}

const PhoneInput: React.FC = () => {
  return (
    <input
      className='number-input'
      type="tel"
      placeholder="Enter your number: +380 (__) ___-__-__">
    </input>
  )
}

export default PhoneInput

const Wrapper = styled.div`
p {
    line-height: 2;
    max-width: 45rem;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .callback-content {
      background: white;
      padding: 20px;
      border-radius: 5px;
      width: 70%;
      max-width: 300px;
      height: 100%;
      max-height: 190px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: -14rem 0 0 4rem;
      border-radius: 20px;
    }
    .number-input {
      height: 100px;
      width: 60px
      line-height: 40px;
      padding: 0 10px;
      border: 1px solid #ccc;
      margin-top: -1rem;
    }
    .submit-btn {
       line-height: 40px;
       width: 100px;
       padding: 0 20px;
       border-radius: 20px; 
       margin-bottom: -0.5rem;
    }
}
`