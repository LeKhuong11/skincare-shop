import React, { useEffect, useState } from 'react'
import root from './checkout.module.scss'
import Cart from './components/CartItem'
import Steps from './components/Step'
import TitleSection from '../../components/TitleSection'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { IProductsCart } from '../../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { updateCartUser } from '../../redux/slice/userSlice'
import { message } from 'antd'
import Loading from '../../components/Loading'

function CheckoutPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [ loading, setLoading ] = useState(false)
    const { user } = useAppSelector(state => state.user)
    const [ cartUser, setCartUser ] = useState<IProductsCart[]>(user?.cart || [])

    const tax = 20.73;
    const shipping = 15;
    let total: number = tax + shipping;
    cartUser.forEach(item => {
      total += item.price * item.quantity
       
    })

    useEffect(() => {
        cartUser.length === 0 && navigate('../shopping-cart')
    }, [cartUser])

    const handleClickRemoveItemInCart = async (id: string) => {
        setLoading(true)
        //Get item by id 
        const newCart = cartUser.filter(item => {
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
        setCartUser(newCart)
    }
  return (
    <div className={root.checkout}>
        <div>
            <TitleSection title='Checkout' subTitle='Almost There' />
        </div>
        <div className={root.stepAndCart}>
            <div className={root.steps}>
                <Steps />
            </div>
            <div className={root.carts}>
                <div>
                    <h3>My Cart</h3>
                    {loading ? <Loading /> : cartUser.map((item) => (
                        <Cart 
                            key={item._id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            image={item.img.url} 
                            onClick={() => handleClickRemoveItemInCart(`${item._id}`)}
                        />
                    ))}
                </div>
                <div>
                    <h4>Total: </h4>
                    <h4>${cartUser.length ? (total).toFixed(1) : 0}</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CheckoutPage