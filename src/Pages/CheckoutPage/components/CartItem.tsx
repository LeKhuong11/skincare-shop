import root from '../checkout.module.scss'
import { FaTimes } from 'react-icons/fa'

interface ICartCheckout {
    name: string,
    price: number,
    image: string,
    quantity: number,
    onClick: any
}

function Cart({name, price, image, quantity, onClick}: ICartCheckout) {
  return (
    <div className={root.cartList}>
        <div className={root.cartItem}>
            <div>
                <div>
                    <img width={40} height={75} src={image} alt="products" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <div style={{display: 'flex'}}>
                        <p>${price}</p>
                        <p><b style={{fontWeight: 600, marginLeft: 14}}>Qty: </b>{quantity}</p>
                    </div>
                </div>
            </div>
            <div className={root.times} onClick={() => onClick()}>
                <FaTimes size={25} />
            </div>
        </div>
    </div>
  )
}

export default Cart