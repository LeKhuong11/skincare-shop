import React from 'react'
import styled from 'styled-components'

interface IInput {
  type: string,
  placehoder?: string,

}

const InputStyled = styled.input`
  width: 452px;
  border-radius: 20px;
  padding: 16px;
  border: none;
  outline-style: none;
  font-size: 17px;
  margin-right: 15px;
  border: 2px solid var(--gray);
  margin-top: 10px;
`

function Input({type, placehoder}: IInput) {
  return (
    <InputStyled 
      type={type}
      placeholder={placehoder}
    />
  )
}

export default Input