import React from 'react'
import styled from 'styled-components'

interface IInput {
  type: string,
  placehoder?: string,
  setValue?: any, 
  name?: string,
  require?: boolean,
  width?: number,
  defaultValue?: string
}

const InputStyled = styled.input`
  border-radius: 20px;
  padding: 12px;
  outline-style: none;
  font-size: 17px;
  margin: 0 15px 0 0;
  border: 2px solid var(--bodyBorder);
  background: var(--bodyBackground);
  color: var(--bodyColor);
  width: 452px;

  &:focus {
    border: 2px solid var(--green);
  }
  @media only screen and (max-width: 768px) {
    width: 390px;
  }
  @media only screen and (max-width: 500px) {
    width:365px;
    padding: 8px;
  }

`

function Input({type, placehoder, setValue, name, require, defaultValue, width}: IInput) {
  return (
    <InputStyled 
      style={{width: width}}
      onChange={(e) => setValue(e.target)} 
      type={type} 
      placeholder={placehoder} 
      defaultValue={defaultValue}
      name={name}
      required={require}
    />
  )
}

export default Input