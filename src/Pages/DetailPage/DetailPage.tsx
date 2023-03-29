import React, { useEffect, useState } from 'react'
import { Breadcrumb, message, Modal, Spin } from 'antd'
import { AiOutlineRise } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight, BsDroplet } from 'react-icons/bs'
import { FiHeart, FiShield } from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import CardItem from '../../components/CardItem'
import FormSignup from '../../components/FormSignUp'
import TitleSection from '../../components/TitleSection'
import axios from 'axios'
import Loading from '../../components/Loading'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { IProductsCart } from '../../redux/slice/cartSlice'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { updateCartUser } from '../../redux/slice/userSlice'


const { confirm } = Modal;
const ContainerStyled = styled.div`

   & .product {
        display: flex;
        margin-top: 50px;
        &>div:first-child {
            display: flex;
            margin-right: 50px;

            & .image-product {
                
                &>div {
                    background-color: var(--gray);
                    border-radius: 32px;
                    padding: 7px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 14px 10px 0;
                    width: 110px;
                    height: 110px;
                    cursor: pointer;
                    & img {
                        width: 45px;
                        height: 80px;
                    }
                }
            }
    
            & .img-main-product {
                width: 350px;
                height: 350px;
                background-color: var(--gray);
                border-radius: 32px;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;

                & img {
                    width: 150px;
                    height: 230px;
                }
            }
        }

        & .info-product {

            &>div:nth-child(2) {
                display: flex;
                align-items: center;
                & span {
                    background-color: var(--yellowLight);
                    border-radius: 15px;
                    height: 33px;
                    width: 90px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 15px;
                }
            }
            &>div:nth-child(3) {
                display: flex;
                align-items: center;

                & p {
                    margin-right: 15px;
                }
            }
            & .buttons {
                display: flex;
                margin-top: 30px;
                align-items: center;

                & .heart {
                    margin-left: 20px;
                    cursor: pointer;    
                }

                & .amount {
                    display: flex;
                    align-items: center;
                    & .button {
                        display: flex;
                        align-items: center;
                        width: 166px;
                        padding: 12px;
                        border: 2px solid var(--gray);
                        border-radius: 32px;
                        justify-content: space-around;
                        margin-right: 20px;
                        & .buttonIncrease, .buttonDecrease {
                            display: block;
                            border: none;
                            cursor: pointer;
                            background: none;
                            padding: 0;
                            svg {
                                display: block;
                                font-size: 14px;
                                height: 100%;
                                width: 100%;
                                stroke-width: 1;
                            }
                        }
                        .buttonDecrease {
                            @include Responsive($--mobile) {
                                margin-left: 16px;
                            }
                        }
                        .buttonIncrease {
                            @include Responsive($--mobile) {
                                margin-right: 16px;
                            }
                        }
                        span {
                            display: block;
                            margin: 16px 0;
                            font-family: inherit;
                            font-size: 24px;
                            line-height: 32px;
                            font-weight: var(--fontWeightBold);
                            color: var(--textDrak100);
                          
                        }
                    }
                }
                & .button-add-to-cart {
                    width: 210px;
                    display: flex;
                    justify-content: center;
                }
            }
        }

        @media only screen and (max-width: 1024px) {
    
                flex-direction: column;
                align-items: center;
        }
        @media only screen and (max-width: 500px) {
            padding: 3% 0;
            &>div:first-child {
                & .image-product {
                    &>div {
                        width: 85px;
                        height: 85px;
                        & img {
                            width: 35px;
                            height: 70px;
                        }
                    }
                }
        
                & .img-main-product {
                    width: 250px;
                    height: 250px;
                    & img {
                        width: 120px;
                        height: 200px;
                    }
                }
            }
            & .heart {
                display: none;
            }
        }
    }
    
    & .product-features {
        display: flex;
        margin-top: 50px;
        & .title {
            width: 50%;
            display: flex;
            justify-content: center;
        }
        & .features {
            display: flex;
            width: 80%;
            margin: 20px 0;
            & .icon {
                border-radius: 50%;
                background: var(--gray);
                padding: 10px;
                width: 55px;
                height: 55px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
            }
        }

        @media only screen and (max-width: 1024px) {
           flex-direction: column;
            & .title {
                width: 100%;
                display: flex;
                justify-content: center;
            }
            & .features {
                width: 100%;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;

                & .icon {
                    margin: 0 0 15px 0;
                }
            }
        }
    }

    & .product-other {
        & .products {
            margin: 30px auto;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(257px, 1fr));
            grid-gap: 40px 35px;
        }
    }
`

const crumbs = [
        {
            title: 'Home Page',
          },
          {
            title: <Link to="../../products">Products</Link>,
          },
          {
            title: <Link to="">Sun Care</Link>,
          },
          {
            title: 'Sun Cream 950 ml',
          },
    ]

function DetailPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useAppSelector(state => state.user)
    // const { cart } = useAppSelector(state => state.cart)
    const [ loading, setLoading ] = useState(false)
    const [ loadingAddToCart, setLoadingAddToCart ] = useState(false)
    const [ detailProduct, setDetailProuct ] = useState<any>();
    const [ countItem, setCountItem ] = useState(1)
    let cart: IProductsCart[] = user.cart;
    //get product by id 
    useEffect(() => {
        setLoading(true)
        axios.get(`https://backend-skincare-shop.vercel.app/api/products/${id}`)
            .then(response => {
                setDetailProuct(response.data)
                setLoading(false)
            })
    }, [])

    const handleClickAddToCart = async (id: string) => {
        setLoadingAddToCart(true)    
        if(!user) {
            confirm({
                title: 'You are not logged in?',
                icon: <ExclamationCircleFilled />,
                content: 'Go to Login page!',
                onOk() {
                  navigate('../login')
                }
              });
              return
        } 
        //Check if the item is in the cart or not, if it has will return true
        const checkItemInArray = cart.find(item => item._id === id)
        
        //If 'checkItemInArray' is false, the product will be added to the cart  
        //If 'checkItemInArray' is true, it means there is a product in the cart
        if(checkItemInArray){
            message.warning("There are product in your cart");
            setLoadingAddToCart(false) 
            return
        }
        //coppy new array and added field "quantity" into newProductAddToCart
        const newProductAddToCart: IProductsCart = detailProduct
        newProductAddToCart.quantity = countItem
        cart = [...cart, newProductAddToCart]
        
        
        await axios.put(`http://localhost:3000/auth/update-user/${user._id}`, {
            cart: cart
        }) 
            .then(res => {
                dispatch(updateCartUser(cart))
                message.success("Added product to cart!")
            })
            .catch(err => {
                message.warning('Added product to cart fail!')
                console.log(err);
            })
        setLoadingAddToCart(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <ContainerStyled>
        {loading ? <Loading /> : 
            <>
                <div className='crumbs'>
                    <Breadcrumb style={{fontFamily: 'Montserrat'}} items={crumbs} />
                </div>
                <div className='product'>
                    <div>
                        <div className='image-product'>
                            <div>
                                <img src={detailProduct?.img.url} alt='product' />
                            </div>
                            <div>
                                <img src={detailProduct?.img.url} alt='product' />
                            </div>
                            <div>
                                <img src={detailProduct?.img.url} alt='product' />
                            </div>
                        </div>
                        <div className='img-main-product'>
                            <span>
                                <img src={detailProduct?.img.url} alt='product' />
                            </span>
                        </div>
                    </div>
                    <div className='info-product'>
                        <div>
                            <TitleSection title={detailProduct?.name} subTitle='Selling Fast' />
                        </div>
                        <div>
                            <span style={{color: detailProduct?.bgColor}}><h6 style={{color: detailProduct?.color, fontWeight: 550}}>EYE CARE</h6></span>
                            <h5>${detailProduct?.price}</h5>
                        </div>
                        <div>
                            <p>Quantity: </p> 
                            <h5>{detailProduct?.amount}</h5>
                        </div>
                        <div className='buttons'>
                            <div className="amount">
                                <div className='button'>
                                    <button 
                                        className='buttonDecrease' 
                                        onClick={() => countItem > 1 && setCountItem(countItem - 1)}
                                    ><BsChevronLeft/></button>
                                    <span>{countItem}</span>
                                    <button 
                                        className='buttonIncrease' 
                                        onClick={() => countItem < 10 && setCountItem(countItem + 1)}
                                    ><BsChevronRight/></button>
                                </div>
                            </div>
                            <div className='button-add-to-cart'>
                                {loadingAddToCart ? <Spin /> : 
                                    <Button 
                                        type='medium' 
                                        content='Add to Cart' 
                                        onClick={() => handleClickAddToCart(`${id}`)}
                                    />
                                }
                            </div>
                            <div className='heart'>
                                <FiHeart size={25} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-features'>
                    <div className='title'>
                        <TitleSection title='Explore the Features' subTitle='Product Features' />
                    </div>
                    <div>
                        <div className='features'>
                            <div className='icon'>
                                <BsDroplet size={26} />
                            </div>
                            <span>
                                <h5>Natural</h5>
                                <p>We are using natural ingredients only when creating our products.</p>
                            </span>
                        </div>
                        <div className='features'>
                            <div className='icon'>
                                <FiShield size={26} />
                            </div>
                            <span>
                                <h5>Full Protection</h5>
                                <p>This product provides broad spectrum SPF 50 and blue light protection.</p>
                            </span>
                        </div>
                        <div className='features'>
                            <div className='icon'>
                                <AiOutlineRise size={26} />
                            </div>
                            <span> 
                            </span>
                        </div>
                    </div>
                </div>

                <div className='product-other'>
                    <div>
                        <TitleSection title='Related Products' subTitle='Explore More' />
                    </div>
                    <div className='products'>
                        <CardItem bgColor="rgb(41,117,255, 0.1)" color="#2975FF" />
                        <CardItem bgColor="rgb(255,193,35, 0.1)" color="#FFC123" />
                        <CardItem bgColor="rgb(255,102,160, 0.1)" color="#FF66A0" />
                        <CardItem bgColor="rgba(0, 204, 150, 0.1)" color="#00cc96" />
                        <CardItem bgColor="rgb(41,117,255, 0.1)" color="#2975FF" />
                        <CardItem bgColor="rgb(255,193,35, 0.1)" color="#FFC123" />
                        <CardItem bgColor="rgb(255,102,160, 0.1)" color="#FF66A0" />
                    </div>
                </div>
                <FormSignup />
            </>
        }
    </ContainerStyled>
  )
}

// function addToCart(product, navigate, dispatch, AllItems) {

  
//     let tempProduct = [];
//     let getQuantity = 0;

//     //create a object product new
//     const productAdded = {  
//       id: product._id,
//       name: product.name,
//       img: product.img,
//       size: product.size,
//       price: product.price,
//       quantity: 1
//     }
//     if(AllItems) {
//       tempProduct = AllItems.filter(item => {
//           return item.id.includes(productAdded.id)
//       })
//     }

//     //kiem tra neu trong mang co trung nhau thi tang so luong len va xoa phan tu
//     if(tempProduct.length >= 1){
//         getQuantity = tempProduct[0].quantity;
//         productAdded.quantity = getQuantity + 1

//         // xoa san pham bi trung sau do update san pham moi len localStorage da cap nhat so luong va gia
//         for (let i = 0; i < AllItems.length; i++) {
//             if(AllItems[i].id === productAdded.id) {    
//                 AllItems.splice(i, 1);
//             }
//         }
//         AllItems.push(productAdded)
//         // dispatch(cartUpdate(AllItems))
//         console.log(productAdded);
//     }
//     else {
//         // dispatch(cart(productAdded))
//     }
 
// }

export default DetailPage