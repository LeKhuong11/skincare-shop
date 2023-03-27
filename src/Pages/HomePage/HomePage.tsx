import React, { useState } from 'react'
import { BsBagDash, BsDroplet, BsMoon, BsSun } from 'react-icons/bs'
import { FiEye, FiShield } from 'react-icons/fi'
import styled from 'styled-components'
import Button from '../../components/Button'
import ButtonScroll from '../../components/ButtonScroll'
import FormSignup from '../../components/FormSignUp'
import { AiOutlineRise } from "react-icons/ai";
import { FaHive } from 'react-icons/fa'
import Categories from '../../components/Categories'
import CardItem from '../../components/CardItem'
import TitleSection from '../../components/TitleSection'
import { useAppSelector } from '../../redux/store'
import { IProducts } from '../../redux/slice/productsSilce'
import { Link } from 'react-router-dom'



const Image = require('../../assets/Image.png')
const ContainerStyled = styled.div`
    padding: 0 4%;
    
    & .homeAds {
      
      & section {
        display: flex;
        padding: 5%;
        background-color: var(--gray);
        border-radius: 64px;
        .heroContent {
            width: 55%;

            padding: 0 5%;
            
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h5 {
                color: var(--blue);
                font-style: italic;
            }
        }

        .infProduct {
            width: 45%;

            padding: 0;

            img {
                width: 100%;
            }
        }

        @media only screen and (max-width: 768px) {
            background: none;

            display: flex;
            flex-direction: column;
            gap: 30px;

            .heroContent {
                width: 100%;
            }

            .infProduct {
                width: 100%;
                border-radius: 64px;

                background-color: var(--gray);
            }
        }
      }
    }

    
    & .theCategories {
          
      &>div:first-child {
        display: flex;
        justify-content: space-between;
      }

      & .categories {
        display: flex;
      }
    }

    & .our-products {
      &>div:first-child {
        display: flex;
        justify-content: space-between;
      }
      & .products {
        margin: 30px auto;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(257px, 1fr));
        grid-gap: 40px 35px;
      }
    }
    @media only screen and (max-width: 1024px) {
        padding: 0 2%;
    }
`
const theCategories = [
  {
    id: 1,
    icon: <BsBagDash size={26} />,
    title: 'On Sale'
  },
  {
    id: 2,
    icon: <AiOutlineRise size={26} />,
    title: 'Featured'
  },
  {
    id: 3,
    icon: <FaHive size={26} />,
    title: 'Masks'
  },
  {
    id: 4,
    icon: <FiEye size={26} />,
    title: 'Eye Care'
  },
  {
    id: 5,
    icon: <BsDroplet size={26} />,
    title: 'Eye Care'
  },
  {
    id: 6,
    icon: <FiShield size={26} />,
    title: 'Eye Care'
  },
  {
    id: 7,
    icon: <BsMoon size={26} />,
    title: 'Eye Care'
  },
  {
    id: 8,
    icon: <BsSun size={26} />,
    title: 'Eye Care'
  },
]

function HomePage() {
  const { products } = useAppSelector(state => state.products)
  const [ listProducts, setListProducts ] = useState<IProducts[]>(products)
  return (
    <ContainerStyled>
       <div className='homeAds'>
        <section>
          <div className='heroContent'>
              <TitleSection title="We Offer the Best Products for your Skin" subTitle="Skincare Products"/>
              <Link to="../products">
                <Button type='medium' content='Shop Now' />
              </Link>
          </div>
          <div className='infProduct'>
            <img src={Image} alt="product"/>
          </div>
        </section>
       </div>
       <div className='theCategories'>
          <div>
            <TitleSection title="Browse by Category" subTitle="The Categories"/>
            <ButtonScroll />
          </div>
          <div className='categories'>
            {theCategories.map(item => (
              <Categories key={item.id} icon={item.icon} title={item.title} />
            ))}
          </div>
       </div>
       <div className='our-products'>
          <div>
            <TitleSection title="Explore our Products" subTitle="Our Products"/>
            <ButtonScroll />
          </div>
          <div className='products'>
            {listProducts.map(item => (
              <CardItem 
                  key={item._id}
                  id={item._id}
                  bgColor={item.bgColor}
                  color={item.color}
                  star={item.star}
                  nameProduct={item.name}
                  imageProduct={item.img}
                  price={item.price}
                  oldPrice={item.oldPrice}
              />
              ))}
          </div>
       </div>
       <FormSignup />
    </ContainerStyled>
  )
}

export default HomePage