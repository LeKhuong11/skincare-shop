import { message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../components/Button'
import { IProductsCart } from '../../../redux/slice/cartSlice'
import { useAppSelector } from '../../../redux/store'

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
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.user)
    const cartItem: IProductsCart[] = user.cart
    let total: number = 0;
    const tax = 20.73;
    const shipping = 15;
    cartItem.forEach(item => {
        total += item.price * item.quantity
    })

    const handleClickCheckout = () => {
        if(user?.cart.length > 0) {
            navigate('../checkout')
        }
        else {
            message.warning("You have not selected a product!")
        }
    }
    
  return (
    <ContainerStyled>
        <h2>Cart Total</h2>

        <div className='subtotal'>
            <div className='subtotalItems'>
                <span>Subtotal:</span>
                <span>${total}</span>
            </div>
            <div className='subtotalItems'>
                <span>Tax:</span>
                <span>${tax}</span>
            </div>
            <div className='subtotalItems'>
                <span>Shipping:</span>
                <span>${shipping}</span>
            </div>
            <div className='totalItems'>
                <span>Total:</span>
                <span>${cartItem.length ? (total + tax + shipping).toFixed(1) : 0}</span>
            </div>
        </div>
        <Button 
            type='medium' 
            content='checkout' 
            onClick={handleClickCheckout}
        />
    </ContainerStyled>
  )
}
