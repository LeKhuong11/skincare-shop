import React, { useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Avatar, Badge } from 'antd';
import { useAppSelector } from '../../redux/store';
import styled from 'styled-components';
import Input from '../../components/Input';
import SwitchTheme from '../../components/Theme';
const lolo = require('../../assets/Logo.png')

const ContainerStyled = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bodyBackground);
    z-index: 100;
    padding: 0 3%;
    position: sticky;
    top: 0;
    & .logo {
        display: flex;
        & img {
            margin-right: 6px;
            width: 42px;
            height: 42px;
        }
        & h2 {
            color: var(--bodyColor);
        }
    }
    & .navigation {
        padding: 7px;
        &>ul {
            display: flex;
            &>li {
                margin: 10px;
                position: relative;
                & a{
                    text-decoration: none;
                    color: var(--bodyColor);
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
                display: flex;
                align-items: center;
                & a{
                    text-decoration: none;
                    color: var(--bodyColor);
                }
                & svg {
                    color: var(--bodyColor);
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
        & svg {
            color: var(--bodyColor);
        }
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
            transition: .6s;
            transform: translateY(-100%); 
            background-color: var(--bodyBackground);

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
    }
    @media only screen and (max-width: 768px) {
        .theme {
            display: none;
        }
    }
    & .close_btn {
        position: absolute;
        top: 1rem;
    }
`

function Header() {
    const { pathname } = useLocation();
    const { user } = useAppSelector(state => state.user)
    const divRefMenu = useRef<any>();
    const showNavbar = () => {
        divRefMenu.current.classList.toggle('reponsive_navbar');
      }
    const handleClicMoveToPage = () => {
        divRefMenu.current.classList.remove('reponsive_navbar');
    }
  return (
    <ContainerStyled>
        <Link className='logo' to="/">
            <img src={lolo} alt="logo" /> 
            <h2>Hygge</h2>
        </Link>
        <div ref={divRefMenu}  className='navigation'>
            <div className='btn close_btn' onClick={showNavbar}> 
                <FaTimes size={27} />
            </div> 
            <ul>
                <li onClick={handleClicMoveToPage}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={handleClicMoveToPage}>
                    <NavLink to="products">Products </NavLink>
                </li>
                <li onClick={handleClicMoveToPage}>
                    <NavLink to="about">About</NavLink>
                </li>
                <li onClick={handleClicMoveToPage}>
                    <NavLink to="contact">Contact</NavLink>
                </li>
                <li onClick={handleClicMoveToPage}>
                    <NavLink to="faq">FAQ</NavLink>
                </li>
            </ul>
        </div>
        <div className='btn' onClick={showNavbar}>
            <FaBars size={25}/>
        </div> 
        <div className='navigationFeature'>
            <ul>
                <li>
                    <Link to="search">
                        <BiSearch fontSize={23} />
                    </Link>
                    {pathname === '/search' && <Input type='text' width={250} />}
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
                <li>
                    <div className='theme'>
                        <SwitchTheme />
                    </div>
                </li>
            </ul>
        </div>
    </ContainerStyled>
  )
}

export default Header