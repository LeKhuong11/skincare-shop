import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const productImg = require('../assets/product.png')


interface ICardItem {
    nameProduct?: string
    color: string,
    bgColor: string,
    imageProduct?: string,
    price?: string,

}

const ContainerStyled = styled.div`
    height: 350px;
    a {
        text-decoration: none;
    }
    & div:first-child {
        height: 70%;
        background-color: var(--gray);
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div:nth-child(2) {

        & h3 {
            margin: 18px 0;
        }
        & span {
            background-color: var(--yellowLight);
            border-radius: 15px;
            height: 33px;
            width: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 15px;
        }
    }
    & :hover {
        img {
            width: 95px;
            height: 195px;
            transition: all 3s linear;
        }
    }
   
`

function CardItem({color, bgColor}: ICardItem) {
  return (
    <ContainerStyled className='root'>
        <Link to="">
            <div>
                <img src={productImg} alt="product" />
            </div>
            <div>
                <h3>After Shower Gel</h3>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 6px'}}>
                    <span style={{ backgroundColor: bgColor}}><h6 style={{color: color, fontWeight: 550}}>EYE CARE</h6></span>
                    <h5>$78</h5>
                </div>
            </div>
        </Link>
    </ContainerStyled>
  )
}

export default CardItem