import root from '../checkout.module.scss'
import { FaTimes } from 'react-icons/fa'

interface ICartCheckout {
    name: string,
    price: number,
    image: string
}

function Cart({name, price, image}: ICartCheckout) {
  return (
    <div className={root.cartList}>
        <div className={root.cartItem}>
            <div>
                <div>
                    <img width={40} src={image} alt="products" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>${price}</p>
                </div>
            </div>
            <div className={root.times}>
                <FaTimes size={25} />
            </div>
        </div>
    </div>
  )
}

export default Cart