import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';
import root from './header.module.scss'
import { Logo } from '../../assets/Logo';
import { Badge } from 'antd';

function Header() {
    const divRefMenu = useRef<any>();
    const showNavbar = () => {
        divRefMenu.current.classList.toggle(root['reponsive_navbar']);
      }
  return (
    <div className={root.header}>
        <div>
            <Logo />
        </div>
        <div ref={divRefMenu}  className={root.navigation}>
            <div className={`${root.btn} ${root.close_btn}`} onClick={showNavbar}> 
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
        <div className={root.btn}  onClick={showNavbar}>
            <FaBars size={25} color="#333"/>
        </div> 
        <div className={root.navigationFeature}>
            <ul>
                <li>
                    <Link to="search">
                        <BiSearch fontSize={23} />
                    </Link>
                </li>
                <li className='shopping-cart'>
                    <Link to="shopping-cart">
                        <Badge style={{marginTop: 0}} size="small" count={5} offset={[10, 10]}>
                            <BsCart2 fontSize={21} fontWeight={550} style={{marginBottom: 3}}/>
                        </Badge>
                    </Link>
                </li>
                <li>
                    <Link to="login">
                        <FiUser fontSize={22}/>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header