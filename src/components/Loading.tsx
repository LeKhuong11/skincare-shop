import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
    svg {
        width: 3.25em;
        transform-origin: center;
        animation: rotate4 1.7s linear infinite;
    }
    
    circle {
        fill: none;
        stroke: hsl(214, 97%, 59%);
        stroke-width: 2;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: dash4 1.3s ease-in-out infinite;
    }
    
    @keyframes rotate4 {
        100% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes dash4 {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
    
        50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
        }
    
        100% {
            stroke-dashoffset: -125px;
        }
   }
   
`

function Loading() {
  return (
    <ContainerStyled>
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </ContainerStyled>
  )
}

export default Loading