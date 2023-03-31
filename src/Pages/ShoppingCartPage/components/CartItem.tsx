import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

interface ICartItem {
    id: string
    img: string
    name: string
    price: number
    quantity: number
    onClick: any
}

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    border: 2px solid var(--bodyBorder);
    border-radius: 48px;
    width: 100%;
    margin: 10px 0;
    @media only screen and (max-width: 375px) {
        flex-direction: column;
        text-align: center;
        padding: 10px;
    }

    & .image-product {
        width: 130px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 32px;
        background-color: var(--gray);
        margin-right: 15px;
        @media only screen and (max-width: 1024px) {
            width: 30%; 
        }

        @media only screen and (max-width: 375px) {
            width: 96px;
            height: 96px; 
        }
    }

    & .infoProduct {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & h4 {
            color: var(--bodyColor);
        }
        & p {
            color: var(--bodyColor);
        }

        @media only screen and (max-width: 1024px) {
            width: 70%;
        }

        @media only screen and (max-width: 375px) {
            width: 100%; 
        }
    }
    & .amount {
        display: flex;
        align-items: center;
        
        & .times {
            & svg {
             color: var(--bodyColor);
            }
        }
        & .button {
            display: flex;
            align-items: center;
            width: 166px;
            padding: 12px;
            border: 2px solid var(--bodyBorder);
            border-radius: 32px;
            justify-content: space-around;
            margin-right: 20px;
            & span {
                color: var(--bodyColor);
            }
            & .buttonIncrease, .buttonDecrease {
                display: block;
                border: none;
                cursor: pointer;
                background: none;
                padding: 0;
                svg {
                    display: block;
                    font-size: 14px;
                    height: 100%;
                    width: 100%;
                    stroke-width: 1;
                    color: var(--bodyColor);
                }
            }
    
            & .buttonDecrease {
                @include Responsive($--mobile) {
                    margin-left: 16px;
                }
            }
            & .buttonIncrease {
                @include Responsive($--mobile) {
                    margin-right: 16px;
                }
            }
            & span {
                display: block;
                margin: 16px 0;
                font-family: inherit;
                font-size: 24px;
                line-height: 32px;
                font-weight: var(--fontWeightBold);
                @include Responsive($--mobile) {
                    font-size: 20px;
                    margin: 8px 0;
                }
            }
        }
    }
`

export default function CartItem({id, onClick, img, price, name, quantity}: ICartItem) {
    const dispatch = useAppDispatch()
    const { cart } = useAppSelector(state => state.cart)
    const [ countItem, setCountItem ] = useState(quantity)

    const handleClickDecrease = () => {
        if(countItem > 1) {
            setCountItem(countItem - 1)
            // cart.forEach(item => {
            //     if(item._id === id) {
            //         item.quantity = countItem
            //     }
            // })
            // dispatch(updateCart(cart))
        }
    }

    const handleClickIncrease = () => {
        if(countItem < 10) {
            setCountItem(countItem + 1)
            // cart.forEach(item => {
            //     if(item._id === id) {
            //         item.quantity = countItem
            //     }
            // })
            // dispatch(updateCart(cart))
        }
    }

  return (
    <ContainerStyled>
      <div className="image-product">
        <img src={img} alt="product" width={45} height={75} />
      </div>

      <div className='infoProduct'>
        <h4>{name}</h4>
        <p>${price}</p>
        <div className="amount">
            <div className='button'>
                <button
                    className='buttonDecrease' 
                    onClick={() => handleClickDecrease()}
                ><BsChevronLeft/></button>
                <span>{countItem}</span>
                <button 
                    className='buttonIncrease' 
                    onClick={() => handleClickIncrease()}
                ><BsChevronRight/></button>
            </div>
            <div className="times" onClick={() => onClick()}>
                <FaTimes size={25} />
            </div>
        </div>
      </div>
    </ContainerStyled>
  );
}
