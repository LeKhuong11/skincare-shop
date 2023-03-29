import React from 'react'
import styled from 'styled-components'

interface IInput {
  type: string,
  placehoder?: string,
  setValue?: any, 
  name?: string,
  require?: boolean
}

const InputStyled = styled.input`
  width: 452px;
  border-radius: 20px;
  padding: 16px;
  outline-style: none;
  font-size: 17px;
  margin-right: 15px;
  border: 2px solid var(--gray);
  
  &:focus {
    border: 2px solid var(--green);
  }
  @media only screen and (max-width: 768px) {
    width: 380px;
  }

`

function Input({type, placehoder, setValue, name, require}: IInput) {
  return (
    <InputStyled 
      onChange={(e) => setValue(e.target)} 
      type={type} 
      placeholder={placehoder} 
      name={name}
      required={require}
    />
  )
}

export default Input