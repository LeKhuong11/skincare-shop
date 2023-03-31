import React, { useState } from 'react'
import styled from 'styled-components'
import CardItem from '../../components/CardItem'
import FormSignup from '../../components/FormSignUp'
import { IProducts } from '../../redux/slice/productsSilce'
import { useAppSelector } from '../../redux/store'


const ContainerStyled = styled.div`
  width: 100%;
  & .titlePage {

      & h2 {
          margin: 20px 0;
          color: var(--bodyColor);
      }
  }

  & .resultFound {
      margin: 20px 0;
      & p {
        color: var(--bodyColor);
      }
  }

  & .selectTag {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & select {
          margin: 15px;
          padding: 8px;
          border-radius: 19px;
          border: 1px solid rgb(224, 223, 223);
      }
  }
  & .products {
      margin: 30px auto;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(257px, 1fr));
      grid-gap: 40px 35px;
  }
`

function SearchPage() {
  const { products } = useAppSelector(state => state.products)
  const [ listProducts, setListProducts ] = useState<IProducts[]>(products)
  
  
  return (
    <ContainerStyled>
      <div className='titlePage'>
        <h2>Search Results</h2>
      </div>
      <div className='resultFound'>
        <p>6 products found</p>
      </div>
      <div className='selectTag'>
        <div>
          <select>
            <option>Color</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Blue</option>
          </select>
          <select>
            <option>Use Case </option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Blue</option>
          </select>
          <select>
            <option>Price Range</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Blue</option>
          </select>
        </div>
        <div>
          <select>
            <option>Price Range</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Blue</option>
          </select>
        </div>
      </div>
      <div className='products'>
        {listProducts.map(item => (
          <CardItem 
            key={item._id}
            id={item._id}
            bgColor={item.bgColor}
            star={item.star}
            color={item.color}
            nameProduct={item.name}
            imageProduct={item.img}
            price={item.price}
          />
        ))}
      </div>
      <FormSignup />
    </ContainerStyled>
  )
}

export default SearchPage