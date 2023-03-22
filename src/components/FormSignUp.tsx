import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const ContainerStyled = styled.div`
    background-color: var(--gray);
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 392px;
    width: 100%;
    margin: 80px 0;
    & > div {
    margin: auto 0;
    & p {
        color: var(--blue);
        font-style: italic;
    }
    & h2 {
        margin: 10px 0 38px;
    }
    
    & form {
        display: flex;
        justify-content: center;
        & input {
            width: 432px;
            border-radius: 20px;
            padding: 16px;
            border: none;
            outline-style: none;
            font-size: 17px;
            margin-right: 15px;
        }
    }
    @media only screen and (max-width: 768px) {
        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            & button {
                margin-top: 20px;
            }
        }
    }
`

function FormSignup() {
  return (
    <ContainerStyled>
        <div>
            <p>- Our Newsletter</p>
            <h2>Sign Up to our Newsletter</h2>
            <form>
                <input type="text" placeholder='Your Email' />
                <Button type="medium" content="Sign Up" />
            </form>
        </div>
    </ContainerStyled>
  )
}

export default FormSignup