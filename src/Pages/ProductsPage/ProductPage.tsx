import { Pagination, PaginationProps } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import CardItem from '../../components/CardItem'
import TitleSection from '../../components/TitleSection'
import { IProducts } from '../../redux/slice/productsSilce'
import { useAppSelector } from '../../redux/store'

const ContainerStyled = styled.div`

    & .products {
        margin: 30px auto;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(257px, 1fr));
        grid-gap: 40px 35px;
    }
    & .pagination {
        float: right;
    }
`

function ProductPage() {
    const { products } = useAppSelector(state => state.products)
    const [currentPage, setCurrentPage] = useState(1)
    const [ listProducts, setListProducts ] = useState<IProducts[]>(products)

    
  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <ContainerStyled>
        <div>
            <TitleSection title='Explore our Products' subTitle='Skincare Products' />
        </div>
        <div className='products'>
            {listProducts.map(item => (
                <CardItem 
                    key={item._id}
                    id={item._id}
                    star={item.star}
                    bgColor={item.bgColor}
                    color={item.color}
                    nameProduct={item.name}
                    imageProduct={item.img}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    sale={item.discouter}
                />
            ))}
        </div>
        <div className='pagination'> 
            <Pagination 
                current={currentPage} 
                onChange={onChange} 
                total={50} 
            />
        </div>
    </ContainerStyled>
  )
}

export default ProductPage