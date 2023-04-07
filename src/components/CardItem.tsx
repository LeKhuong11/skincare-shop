import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Rate } from 'antd'



interface ICardItem {
    id?: string
    nameProduct?: string
    color: string,
    bgColor: string,
    star?: number,
    oldPrice?: number
    imageProduct?: {
        url: string
        public_id: string
    },
    price?: number,
    sale?: number
}

const ContainerStyled = styled.div`
    height: 350px;
    position: relative;
    a {
        text-decoration: none;

        &>div:first-child {
            height: 70%;
            background-color: var(--bodyBorder);
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &>div:nth-child(2) {
    
            & h3 {
                color: var(--bodyColor);
                margin: 18px 0 5px 0;
            }
            & h5 {
                color: var(--bodyColor);
            }
            & .rate {
                margin-bottom: 5px;
            }
            & .type {
                background-color: var(--yellowLight);
                border-radius: 15px;
                height: 33px;
                width: 90px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 15px;
            }
            & .old-price {
                text-decoration: line-through;
                opacity: .5;
                margin-right: 10px;
            }
        }
    }

    & .sale {
        display: flex;  
        justify-content: center;
        align-items: center;
        padding: 8px;
        background: #FF0000;
        border-radius: 24px;
        width: 70px;
        height: 29px;
        position: absolute;
        top: 30px;
        right: -7px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        & h5 {
            color: var(--white);
            font-size: 10px;
        }
    }
`

function CardItem({id, star, color, bgColor, nameProduct, price = 0, oldPrice, imageProduct, sale = 0}: ICardItem) {
    const discounter = ((100 - sale) / 100) * price
  return (
    <ContainerStyled className='root'>
        <Link to={`../products/detail/${id}`}>
            <div>
                <img src={imageProduct?.url} alt="product" />
            </div>
            <div>
                <h3>{nameProduct}</h3>
                <div className='rate'>
                    <Rate allowHalf defaultValue={star} style={{ fontSize: 16 }} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 6px'}}>
                    <span className='type' style={{ backgroundColor: bgColor}}><h6 style={{color: color, fontWeight: 550}}>EYE CARE</h6></span>
                    <h5 className='old-price'>{sale ? `$${price}` : ''}</h5>
                    <h5>${sale ? discounter.toFixed(0) : price}</h5>
                </div>
            </div>
            {sale ? 
                <div className='sale'>
                    <h5>{sale}% OFF</h5>
                </div> : ''}
        </Link>
    </ContainerStyled>
  )
}

export default CardItem