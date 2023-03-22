import React from 'react'
import CardItem from '../../components/CardItem'
import FormSignup from '../../components/FormSignUp'
import root from './search.module.scss'

function SearchPage() {
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
        <CardItem bgColor="rgb(41,117,255, 0.1)" color="#2975FF" />
        <CardItem bgColor="rgb(255,193,35, 0.1)" color="#FFC123" />
        <CardItem bgColor="rgb(255,102,160, 0.1)" color="#FF66A0" />
        <CardItem bgColor="rgba(0, 204, 150, 0.1)" color="#00cc96" />
        <CardItem bgColor="rgb(41,117,255, 0.1)" color="#2975FF" />
        <CardItem bgColor="rgb(255,193,35, 0.1)" color="#FFC123" />
        <CardItem bgColor="rgb(255,102,160, 0.1)" color="#FF66A0" />
        <CardItem bgColor="rgba(0, 204, 150, 0.1)" color="#00cc96" />
        <CardItem bgColor="rgb(41,117,255, 0.1)" color="#2975FF" />
        <CardItem bgColor="rgb(255,193,35, 0.1)" color="#FFC123" />
        <CardItem bgColor="rgb(255,102,160, 0.1)" color="#FF66A0" />
        <CardItem bgColor="rgba(0, 204, 150, 0.1)" color="#00cc96" />
      </div>
      <FormSignup />
    </div>
  )
}

export default SearchPage