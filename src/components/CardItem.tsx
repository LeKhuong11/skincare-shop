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

}

const ContainerStyled = styled.div`
    height: 350px;
    a {
        text-decoration: none;

        &>div:first-child {
            height: 70%;
            background-color: var(--gray);
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &>div:nth-child(2) {
    
            & h3 {
                margin: 18px 0 5px 0;
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
`

function CardItem({id, star, color, bgColor, nameProduct, price, oldPrice, imageProduct}: ICardItem) {
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
                    <h5 className='old-price'>{oldPrice ? `$${oldPrice}` : ''}</h5>
                    <h5>${price}</h5>
                </div>
            </div>
        </Link>
    </ContainerStyled>
  )
}

export default CardItem