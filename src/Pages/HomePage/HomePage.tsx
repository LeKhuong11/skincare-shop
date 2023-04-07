import React, { useEffect, useRef, useState } from 'react'
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
import { Carousel } from 'antd'



const Image = require('../../assets/Image.png')
const ContainerStyled = styled.div`
    padding: 0 4%;
    
    & .homeAds {
      
      & section {
        display: flex;
        padding: 5%;
        background-color: var(--bodyBorder);
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
        width: 98%;
        overflow: hidden;
        
        & .items {
          display: flex;
          transition: transform .25s linear;
        }
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
  const [ transform, setTransform ] = useState(0)
  const [width, setWidth] = useState(window.innerWidth);
  const divRef = useRef<any>();

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleClickNext = () => {
    console.log(divRef.current.offsetWidth/1.5);
    //1024 => 4
    //768 => 1.5
    //500 => + 140px
    const breakPoint = width <= 500 ? divRef.current.offsetWidth + 140 : width <= 768 ? divRef.current.offsetWidth/1.5 : width <= 1024 ? divRef.current.offsetWidth/4 : 0;
    
    if(width < 1024){
      transform > -breakPoint ? setTransform(prev => prev - 140) : setTransform(transform)
      
    }
  }
  const handleClickPrev = () => {
    if(width < 1024)
      transform < 0 ? setTransform(prev => prev + 140) : setTransform(0)
  }
  return (
    <ContainerStyled>
      <Carousel autoplay>
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
      </Carousel>
       <div className='theCategories'>
          <div>
            <TitleSection title="Browse by Category" subTitle="The Categories"/>
            <ButtonScroll clickNext={handleClickNext} clickPrev={handleClickPrev} />
          </div>
          <div className='categories'>
            <div ref={divRef} className='items' style={{transform: `translateX(${width > 1024 ? 0 : transform}px)`}}>
              {theCategories.map(item => (
                <Categories key={item.id} icon={item.icon} title={item.title} />
              ))}
            </div>
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
                  sale={item.discouter}
              />
              ))}
          </div>
       </div>
       <FormSignup />
    </ContainerStyled>
  )
}

export default HomePage