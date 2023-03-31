import { message } from 'antd'
import axios from 'axios'
import React, {useState} from 'react'
import styled from 'styled-components'
import FormSignup from '../../components/FormSignUp'
import Loading from '../../components/Loading'
import TitleSection from '../../components/TitleSection'
import { IProductsCart } from '../../redux/slice/cartSlice'
import { updateCartUser } from '../../redux/slice/userSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import CartItem from './components/CartItem'
import NotFoundCart from './components/NotFoundCart'
import Totals from './components/Totals'
import Button from '../../components/Button'

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

        & .loading {
            width: 100%;
            display: flex;
            align-items: self-start;
            justify-content: center;
        }

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
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user)
    const listCartUser: IProductsCart[] = user?.cart
    const [ loading, setLoading ] = useState(false)
    const [ listCartItem, setListCartItem ] = useState<IProductsCart[] | null>(user?.cart.length ? user?.cart : [])

    const handleClickRemoveItemInCart = async (id: string) => {
        setLoading(true)
        //Get item by id 
        const newCart = listCartUser.filter(item => {
            return !item._id.includes(id)
        })
        await axios.put(`https://backend-skincare-shop.vercel.app/auth/update-user/${user._id}`, {
            cart: newCart
        }) 
            .then(res => {
                dispatch(updateCartUser(newCart))
                message.success("Update cart susscessfully!")
            })
            .catch(err => {
                message.warning('Update cart fail!')
                console.log(err);
            })
        setLoading(false)
        setListCartItem(newCart);
    }

    const handleClickClearCart = async () => {
        await axios.put(`https://backend-skincare-shop.vercel.app/auth/update-user/${user._id}`, {
            cart: []
        }) 
            .then(res => {
                dispatch(updateCartUser([]))
                message.success("Delete cart susscessfully!")
            })
            .catch(err => {
                message.warning('Delete cart fail!')
                console.log(err);
            })
        setListCartItem([])
    }
    
  return (
    <>
        {listCartItem?.length ? 
            <ContainerStyled>
                <div className='title'>
                    <div>
                        <TitleSection title="Shopping Cart" subTitle="Your Cart"/>
                    </div>
                    <div>
                        <Button content='Clear All' type='transparent' onClick={handleClickClearCart} />
                    </div>
                </div>
                <div className='cartContent'>
                    {loading ? 
                        <div className='loading'>
                            <Loading />
                        </div> : 
                        <div className='cartItems'>
                            {listCartItem.map(item => (
                                <CartItem 
                                    key={item._id}
                                    id={item._id}
                                    img={item?.img?.url}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onClick={() => handleClickRemoveItemInCart(`${item._id}`)}
                                />
                            ))}
                        </div>}
                    <Totals />
                </div>
            <FormSignup />
            </ContainerStyled> : <NotFoundCart />
        }
    </>
  )
}

export default ShoppingCartPage