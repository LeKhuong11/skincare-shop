import React, { useEffect, useState } from 'react'
import CardItem from '../../components/CardItem'
import FormSignup from '../../components/FormSignUp'
import { IProducts } from '../../redux/slice/productsSilce'
import { useAppSelector } from '../../redux/store'
import root from './search.module.scss'

function SearchPage() {
  const { products } = useAppSelector(state => state.products)
  const [ listProducts, setListProducts ] = useState<IProducts[]>(products)
  
  console.log(listProducts);
  
  return (
    <div className={root.searchPage}>
      <div className={root.titlePage}>
        <h2>Search Results</h2>
      </div>
      <div className={root.resultFound}>
        <p>6 products found</p>
      </div>
      <div className={root.selectTag}>
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
      <div className={root.products}>
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
    </div>
  )
}

export default SearchPage