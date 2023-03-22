import React from 'react'
import styled from 'styled-components'
import FormSignup from '../../components/FormSignUp'
import TitleSection from '../../components/TitleSection'
import CartItem from './components/CartItem'
import Totals from './components/Totals'

const ContainerStyled = styled.div`

    & .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & button {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 40px;
            gap: 10px;
            border-radius: 32px;
            border: none;
            font-family: "Montserrat", sans-serif;
            font-size: 17px;
            font-weight: var(--fontWeightSemibold);
            cursor: pointer;
            background-color: var(--white);
            border: 2px solid var(--gray);
            margin-right: 20px;
        }
    }

    & .cartContent {
        display: flex;
        justify-content: space-between;
        gap: 30px;

            @media screen and (max-width: 1024px) {
                flex-direction: column;
            }

            .cartItems {
                width: 65%;
                display: flex;
                flex-direction: column;

            @media screen and (max-width: 1024px) {
                width: 100%;
            }
        }
    }
`
function ShoppingCartPage() {
  return (
    <ContainerStyled>
        <div className='title'>
            <div>
                <TitleSection title="Shopping Cart" subTitle="Your Cart"/>
            </div>
            <div>
                <button>Clear All</button>
            </div>
        </div>
        <div className='cartContent'>
            <div className='cartItems'>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <Totals />
      </div>
      <FormSignup />
    </ContainerStyled>
  )
}

export default ShoppingCartPage