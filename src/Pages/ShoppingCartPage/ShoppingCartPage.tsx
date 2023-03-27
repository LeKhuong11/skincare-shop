import React, {useState} from 'react'
import styled from 'styled-components'
import FormSignup from '../../components/FormSignUp'
import TitleSection from '../../components/TitleSection'
import { clearCart, IProductsCart, updateCart } from '../../redux/slice/cartSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import CartItem from './components/CartItem'
import Totals from './components/Totals'

const ContainerStyled = styled.div`

    & .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & button {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 40px;
            gap: 10px;
            border-radius: 32px;
            border: none;
            font-family: "Montserrat", sans-serif;
            font-size: 17px;
            font-weight: var(--fontWeightSemibold);
            cursor: pointer;
            background-color: var(--white);
            border: 2px solid var(--gray);
            margin-right: 20px;
        }
    }

    & .cartContent {
        display: flex;
        justify-content: space-between;
        gap: 30px;

            @media screen and (max-width: 1024px) {
                flex-direction: column;
            }

            .cartItems {
                width: 65%;
                display: flex;
                flex-direction: column;

            @media screen and (max-width: 1024px) {
                width: 100%;
            }
        }
    }
`
function ShoppingCartPage() {
    const dispath = useAppDispatch()
    const { cart } = useAppSelector(state => state.cart)
    const [ listCartItem, setListCartItem ] = useState<IProductsCart[]>(cart)

    const handleClickRemoveItemInCart = (id: string) => {
        const newCart = cart.filter(item => {
            return !item._id.includes(id)
        })
        dispath(updateCart(newCart));
        setListCartItem(newCart);
        
    }

    const handleClickClearCart = () => {
        dispath(clearCart())
    }
  return (
    <ContainerStyled>
        <div className='title'>
            <div>
                <TitleSection title="Shopping Cart" subTitle="Your Cart"/>
            </div>
            <div>
                <button onClick={handleClickClearCart}>Clear All</button>
            </div>
        </div>
        <div className='cartContent'>
            <div className='cartItems'>
                {listCartItem.map(item => (
                    <CartItem 
                        key={item._id}
                        id={item._id}
                        img={item.img.url}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onClick={() => handleClickRemoveItemInCart(`${item._id}`)}
                    />
                ))}
            </div>
            <Totals />
      </div>
      <FormSignup />
    </ContainerStyled>
  )
}

export default ShoppingCartPage