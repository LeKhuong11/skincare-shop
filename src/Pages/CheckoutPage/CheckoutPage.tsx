import React, { useEffect, useState } from 'react'
import root from './checkout.module.scss'
import Cart from './components/CartItem'
import Steps from './components/Step'
import TitleSection from '../../components/TitleSection'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { updateCartUser } from '../../redux/slice/userSlice'
import { Result, message } from 'antd'
import Loading from '../../components/Loading'
import { addPaymentProduct, clearPayment } from '../../redux/slice/payProductsSlice'
import Button from '../../components/Button'

function CheckoutPage() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ checkout, setCheckout ] = useState<boolean>(false)
    const { user } = useAppSelector(state => state.user)
    const { paymentProducts } = useAppSelector(state => state.payments)

    const tax = 20.73;
    const shipping = 15;
    let total: number = tax + shipping;
    paymentProducts.forEach(item => {
      total += item.price * item.quantity
       
    })

    const handleClickOpenModel = async () => {
        setCheckout(true)
        await axios.put(`https://backend-skincare-shop.vercel.app/auth/update-user/${user._id}`, {
            cart: []
        }) 
            .then(res => {
                dispatch(clearPayment())
                dispatch(updateCartUser([]))
                message.success("Order Successfully!")
            })
            .catch(err => {
                message.warning('Order fail!')
            })
        
    }
   

    useEffect(() => {
        paymentProducts.length === 0 && setTimeout(() => {
            navigate('../shopping-cart')
        }, 5000) 
    }, [paymentProducts])

    const handleClickRemoveItemInCart = async (id: string) => {
        setLoading(true)
        //Get item by id 
        const newCart = paymentProducts.filter(item => {
            return !item._id.includes(id)
        })
        await axios.put(`https://backend-skincare-shop.vercel.app/auth/update-user/${user._id}`, {
            cart: newCart
        }) 
            .then(res => {
                dispatch(updateCartUser(newCart))
                dispatch(addPaymentProduct(newCart))
                message.success("Update cart susscessfully!")
            })
            .catch(err => {
                message.warning('Update cart fail!')
                console.log(err);
            })
        setLoading(false)
    }
    
  return (
    <>
        {checkout ? 
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Result style={{paddingBottom: 15}} status="success" />
                <h3>Successfully purchased the products!</h3>
                <p style={{width: '50%'}}>Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.</p>
                <Button type="small" content='Shop now' onClick={() => navigate('/')} />
            </div> : 
            <div className={root.checkout}>
                <div>
                    <TitleSection title='Checkout' subTitle='Almost There' />
                </div>
                <div className={root.stepAndCart}>
                    <div className={root.steps}>
                        <Steps onClick={handleClickOpenModel} />
                    </div>
                    <div className={root.carts}>
                        <div>
                            <h3>My Cart</h3>
                            {loading ? <Loading /> : paymentProducts.map((item) => (
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
                            <h4>${paymentProducts.length ? (total).toFixed(1) : 0}</h4>
                        </div>
                    </div>
                </div>
            </div>
        }
    </> )
}

export default CheckoutPage