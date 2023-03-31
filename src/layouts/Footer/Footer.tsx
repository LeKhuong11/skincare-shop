import { Link } from "react-router-dom";
import root from "./footer.module.scss";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import SwitchTheme from "../../components/Theme";
const logo = require('../../assets/Logo.png')

const navigateFooter = {
    category: [
        {
            name: "On Sale",
            link: ""
        },
        {
            name: "Featured",
            link: ""
        },
        {
            name: "Masks",
            link: ""
        },
        {
            name: "Eye Care",
            link: ""
        },
        {
            name: "Moisturizers",
            link: ""
        },
        {
            name: "Treatments",
            link: ""
        },
        {
            name: "Night Care",
            link: ""
        },
        {
            name: "Sun Care",
            link: ""
        },
    ],
    legal: [
        {
            name: "Terms of Service",
            link: "/"
        },
        {
            name: "Privacy Policy",
            link: "/"
        },
        {
            name: "Return Policy",
            link: "/"
        },
        {
            name: "Shipping",
            link: "/"
        },
        {
            name: "Data Protection",
            link: "/"
        },
    ],
    company: [
        {
            name: "About",
            link: "/"
        },
        {
            name: "Team",
            link: "/"
        },
        {
            name: "Contact",
            link: "/"
        },
        {
            name: "Careers",
            link: "/"
        },
        {
            name: "Vision",
            link: "/"
        },
        {
            name: "Culture",
            link: "/"
        },
    ]
}

export const Footer = () => {
    
    
    return(
        <footer className={root.footer}>
            <div className={root.footerInfo}>
                <Link className={root.logoLink} to="/">
                    <img src={logo} alt="logo" /> 
                    <h2>Hygge</h2>
                </Link>
                <span className={root.content}>© 2020 - All rights reserved</span>
                <div className={root.containerLinkSocialNetwork}>
                    <Link className={root.linkSocialNetwork} to="/">
                        <FiInstagram/>
                    </Link>
                    <Link className={root.linkSocialNetwork} to="/">
                        <FiTwitter/>
                    </Link>
                    <Link className={root.linkSocialNetwork} to="/">
                        <FiFacebook/>
                    </Link>
                </div>
                <div className={root.theme}>
                    <SwitchTheme />
                </div>
            </div>
            <ul className={`${root.footerListLink} ${root.footerCategory}`}>
                <h3 className={root.listLinkTitle}>Categories</h3>
                {navigateFooter.category.map((item, index) => <li key={index} className={root.listLinkItem}>
                    <Link to={item.link}>{item.name}</Link>
                </li>)}
            </ul>
            <ul className={`${root.footerListLink} ${root.footerLegal}`}>
                <h3 className={root.listLinkTitle}>Legal</h3>
                {navigateFooter.legal.map((item, index) => <li key={index} className={root.listLinkItem}>
                    <Link to={item.link}>{item.name}</Link>
                </li>)}
            </ul>
            <ul className={`${root.footerListLink} ${root.footerCompany}`}>
                <h3 className={root.listLinkTitle}>Company</h3>
                {navigateFooter.company.map((item, index) => <li key={index} className={root.listLinkItem}>
                    <Link to={item.link}>{item.name}</Link>
                </li>)}
            </ul>
        </footer>
    )
}