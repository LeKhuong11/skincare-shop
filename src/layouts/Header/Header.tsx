import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';
import root from './header.module.scss'
import { Logo } from '../../assets/Logo';

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
                <li className={root.navigate}>
                    <NavLink to="">Categories </NavLink>
                    <RiArrowDropDownLine />
                    <ul>
                        <li>
                            <NavLink to="">On Sale</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Featured</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Masks</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category">Eye Care</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Moisturizers</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Treatments </NavLink>
                        </li>
                        <li>
                            <NavLink to="">Night Care </NavLink>
                        </li>
                        <li>
                            <NavLink to="">Sun Care </NavLink>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
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
                <li>
                    <Link to="shopping-cart">
                        <BsCart2 fontSize={21} fontWeight={550} style={{marginBottom: 3}}/>
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