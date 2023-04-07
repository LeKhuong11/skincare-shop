import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styled from 'styled-components'

interface IButtonScroll {
    clickNext?: any,
    clickPrev?: any
}

const ContainerStyled = styled.div`
    width: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btnSlideLeft, .btnSlideRight {
        width: 48px;
        height: 48px;
        padding: 17px;
        border: none;
        background-color: var(--bodyBorder);
        border-radius: 50%;
        cursor: pointer;
        svg {
            width: 100%;
            height: 100%;
            stroke-width: 1;
            color: var(--bodyColor);
        }
    }
    .btnSlideLeft:hover, .btnSlideRight:hover {
        background-color: var(--black);
        svg {
            color: var(--white);
        }
    }
`

function ButtonScroll({clickNext, clickPrev}: IButtonScroll) {
  return (
        <ContainerStyled>
            <button className='btnSlideLeft' onClick={clickPrev}><BsChevronLeft/></button>
            <button className='btnSlideRight' onClick={clickNext}><BsChevronRight/></button>
        </ContainerStyled>
  )
}

export default ButtonScroll