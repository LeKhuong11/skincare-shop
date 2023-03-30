import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Logo } from '../../assets/Logo';
import { Avatar, Badge } from 'antd';
import { useAppSelector } from '../../redux/store';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;

    & .navigation {
        padding: 7px;
        &>ul {
            display: flex;
            &>li {
                margin: 10px;
                position: relative;
                & a{
                    text-decoration: none;
                    color: var(--textDrak100);
                }
                & .active {
                    border-bottom: 4px solid var(--green);
                    border-radius: 3px;
                    transition: all .3s linear;
                }
                &>ul {
                    margin-left: 10px;
                    padding: 7px;
                    display: none;
                    position: absolute;
                    top: 100%;
                    &>li {
                        padding: 10px 15px;
                    }
                } 

                &:hover {
                    
                    & ul {
                        display: block;
                    }
                }
            }
            & .navigate {
                display: flex;
                align-items: center;
            }
        }
    }
    & .navigationFeature {
        &>ul {
            display: flex;
            &>li {
                margin: 10px;
                position: relative;
                & a{
                    text-decoration: none;
                    color: var(--textDrak100);
                }
                & .active {
                    color: red;
                }
                &>ul {
                    margin-left: 10px;
                    padding: 7px;
                    display: none;
                    position: absolute;
                    top: 100%;
                    &>li {
                        padding: 10px 15px;
                    }
                } 

                &:hover {
                    
                    & ul {
                        display: block;
                    }
                }
            }
            & .navigate {
                display: flex;
                align-items: center;
            }
            
        }
    }
    .btn {
        padding: 5px;
        cursor: pointer;
        opacity: 0;
        display: none;
    }

    @media only screen and (max-width: 1024px) {
        & .btn {
            display: block;
            opacity: 1;
        }

        & .navigation {
            position: fixed;
            z-index: 2;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: .8s;
            transform: translateY(-100%); 
            background-color: var(--gray);

            &>ul {
                flex-direction: column;
                margin-top: 5rem;
                text-align: center;

                &>li {
                    padding: 7px 0;
                    position: relative;
                    &>ul {
                        position: absolute;
                        top: -10px;
                        transform: translateX(80px);
                        

                    }
                }
            }
        }
        .reponsive_navbar {
            transform: none;
        }
    & .close_btn {
        position: absolute;
        top: 1rem;
    }
`

function Header() {
    const { cart } = useAppSelector(state => state.cart)
    const { user } = useAppSelector(state => state.user)
    const divRefMenu = useRef<any>();
    const showNavbar = () => {
        divRefMenu.current.classList.toggle('reponsive_navbar');
      }
  return (
    <ContainerStyled>
        <div>
            <Logo />
        </div>
        <div ref={divRefMenu}  className='navigation'>
            <div className='btn close_btn' onClick={showNavbar}> 
                <FaTimes size={27} color="#333" />
            </div> 
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="products">Products </NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="faq">FAQ</NavLink>
                </li>
            </ul>
        </div>
        <div className='btn' onClick={showNavbar}>
            <FaBars size={25} color="#333"/>
        </div> 
        <div className='navigationFeature'>
            <ul>
                <li>
                    <Link to="search">
                        <BiSearch fontSize={23} />
                    </Link>
                </li>
                <li className='shopping-cart'>
                    <Link to="shopping-cart">
                        <Badge style={{marginTop: 0}} size="small" count={user ? user?.cart.length : ''} offset={[10, 10]}>
                            <BsCart2 fontSize={21} fontWeight={550} style={{marginBottom: 3}}/>
                        </Badge>
                    </Link>
                </li>
                <li>
                    {user ? 
                        <Link to="dashboard">
                            <Avatar 
                                size={25} 
                                src={user?.avatar}
                                style={{background: 'orange'}}
                            >{user?.avatar || user?.displayName.charAt(0).toUpperCase()}</Avatar>
                        </Link> : 
                        <Link to="login">
                            <FiUser fontSize={22}/>
                        </Link>
                    }
                </li>
            </ul>
        </div>
    </ContainerStyled>
  )
}

export default Header