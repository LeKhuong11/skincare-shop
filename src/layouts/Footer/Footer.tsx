import { Link } from "react-router-dom";
import root from "./footer.module.scss";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { useState } from "react";
import { navigateFooter } from "./navigateFooter";
import { Logo } from "../../assets/Logo";

export const Footer = () => {
    const [mode, setMode] = useState(true);
    const handleSetMode = () => {
        setMode(!mode);
    }
    const styleMode = {
        lightMode: {
            left: "6px",
            right: "auto"
        },
        darkMode: {
            left: "auto",
            right: "6px"
        }
    }
    return(
        <footer className={root.footer}>
            <div className={root.footerInfo}>
                <Link className={root.logoLink} to="/">
                    <Logo />
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
                {/* <button className={root.btnMode} onClick={() => handleSetMode()}>
                    { mode ? (
                        <div className={root.containerIconMode} style={styleMode.lightMode}>
                        <img src={lightModeIcon} alt="" />
                    </div>
                    ) : (
                        <div className={root.containerIconMode} style={styleMode.darkMode}>
                        <img src={darkModeIcon} alt="" />
                    </div>
                    )}
                </button> */}
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