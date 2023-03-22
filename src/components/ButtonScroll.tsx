import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styled from 'styled-components'

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
        background-color: var(--gray);
        border-radius: 50%;
        cursor: pointer;
        svg {
            width: 100%;
            height: 100%;
            stroke-width: 1;
        }
    }
    .btnSlideLeft:hover, .btnSlideRight:hover {
        background-color: var(--black);
        svg {
            color: var(--white);
        }
    }
`

function ButtonScroll() {
  return (
        <ContainerStyled>
            <button className='btnSlideLeft'><BsChevronLeft/></button>
            <button className='btnSlideRight'><BsChevronRight/></button>
        </ContainerStyled>
  )
}

export default ButtonScroll