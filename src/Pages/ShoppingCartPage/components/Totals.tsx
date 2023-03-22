import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'

const ContainerStyled = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;

    padding: 20px 3%;

    border: 2px solid var(--gray);
    border-radius: 48px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media only screen and (max-width: 375px) {
        padding: 20px;
    }

    .subtotal {
        display: grid;
        grid-template: 1fr 1fr 1fr 1fr / 1fr;
        gap: 40px;

        @media screen and (max-width: 1024px) {
        grid-template: 1fr 1fr / 1fr 1fr;
        }

        @media screen and (max-width: 768px) {
        grid-template: 1fr 1fr 1fr 1fr / 1fr;
        }

        .subtotalItems, .totalItems {
        display: flex;
        justify-content: space-between;

        span {
            display: block;
        }
        }

        .totalItems {
            span {
                font-weight: 600;
            }
        }
    }
`

export default function Totals() {
  return (
    <ContainerStyled>
        <h2>Cart Total</h2>

        <div className='subtotal'>
            <div className='subtotalItems'>
                <span>Subtotal:</span>
                <span>$209</span>
            </div>
            <div className='subtotalItems'>
                <span>Tax:</span>
                <span>$20.73</span>
            </div>
            <div className='subtotalItems'>
                <span>Shipping:</span>
                <span>$15</span>
            </div>
            <div className='totalItems'>
                <span>Total:</span>
                <span>$224</span>
            </div>
        </div>
        <Button type='medium' content='checkout' />
    </ContainerStyled>
  )
}
