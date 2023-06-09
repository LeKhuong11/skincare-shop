import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
    margin-right: 15px;
    & button {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px 20px;
        gap: 10px;
        background: var(--greenInput);
        border-radius: 32px;
        border: none;
        color: var(--textLight100);
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        font-weight: var(--fontWeightSemibold);
        cursor: pointer;
    }
    & .large {
        width: 452px;
        
        @media only screen and (max-width: 768px) {
            width: 380px;
        }
    }
    & .medium {
        width: 200px;
    }
    & .transparent {
        background-color: transparent !important;
        color: var(--bodyColor) !important;
        border: 2px solid var(--bodyBorder) !important;
        width: 220px;
    }
    & :hover {
        background: var(--blue);
        transition: all .2s linear;
    
    }
`   
interface IButton {
    type: 'small' | 'medium' | 'large' | 'transparent',
    content: string,
    onClick?: any
}

function Button({type, content, onClick}: IButton) {
  return (
    <ContainerStyled>
        <button className={type} onClick={onClick}>
            {content}
        </button>
    </ContainerStyled>
  )
}

export default Button