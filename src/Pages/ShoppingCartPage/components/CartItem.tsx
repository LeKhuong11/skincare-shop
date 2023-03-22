import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const productsDemo = require('../../../assets/product.png')
const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    border: 2px solid var(--gray);
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
        & .button {
            display: flex;
            align-items: center;
            width: 166px;
            padding: 12px;
            border: 2px solid var(--gray);
            border-radius: 32px;
            justify-content: space-around;
            margin-right: 20px;
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
                }
            }
    
            .buttonDecrease {
                @include Responsive($--mobile) {
                    margin-left: 16px;
                }
            }
            .buttonIncrease {
                @include Responsive($--mobile) {
                    margin-right: 16px;
                }
            }
            span {
                display: block;
                margin: 16px 0;
                font-family: inherit;
                font-size: 24px;
                line-height: 32px;
                font-weight: var(--fontWeightBold);
                color: var(--textDrak100);
                @include Responsive($--mobile) {
                    font-size: 20px;
                    margin: 8px 0;
                }
            }
        }
    }
`

export default function CartItem() {
  return (
    <ContainerStyled>
      <div className="image-product">
        <img src={productsDemo} alt="product" width={45} height={75} />
      </div>

      <div className='infoProduct'>
        <h4>Sleepless Night 10 g</h4>
        <p>$97</p>
        <div className="amount">
            <div className='button'>
                <button className='buttonDecrease'><BsChevronLeft/></button>
                <span>3</span>
                <button className='buttonIncrease'><BsChevronRight/></button>
            </div>
            <div>
                <FaTimes size={25} />
            </div>
        </div>
      </div>
    </ContainerStyled>
  );
}
