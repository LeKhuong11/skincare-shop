import React, { useEffect } from 'react'
import root from './checkout.module.scss'
import Cart from './components/CartItem'
import Steps from './components/Step'
import TitleSection from '../../components/TitleSection'
import { useAppSelector } from '../../redux/store'
import { IProductsCart } from '../../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'

function CheckoutPage() {
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.user)
    const cartUser: IProductsCart[] = user?.cart || []
    const tax = 20.73;
    const shipping = 15;
    let total: number = tax + shipping;
    cartUser.forEach(item => {
        total += item.price * item.quantity
    })

    useEffect(() => {
        cartUser.length === 0 && navigate('../products')
    }, [])
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
                    {cartUser.length && cartUser.map((item) => (
                        <Cart 
                            key={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.img.url} 
                        />
                    ))}
                </div>
                <div>
                    <h4>Total: </h4>
                    <h4>${cartUser.length ? (total + tax + shipping).toFixed(1) : 0}</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CheckoutPage