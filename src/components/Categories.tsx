import React from 'react'
import styled from 'styled-components'

interface ICategories {
    icon: any,
    title: string
}

const ContainerStyled = styled.div`
        width: 120px;
        min-width: 120px;
        height: 120px;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--bodyBorder);
        margin: 0 10px;
        cursor: pointer;
        & svg {
            color: var(--green);
        }
        & h5 {
            margin-top: 12px;
            color: var(--bodyColor);
        }
`

function Categories({icon, title}: ICategories) {
  return (
    <ContainerStyled>
        <span>
            {icon}
        </span>
        <h5>{title}</h5>
    </ContainerStyled>
  )
}

export default Categories