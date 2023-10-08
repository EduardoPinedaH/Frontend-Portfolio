import React, { useState } from "react";
import "./header.css";

const Header = () => {
    /* =============== BACKGROUND HEADER =============== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /* =============== TOGGLE MENU =============== */
    const [toggle, setToggle] = useState(false);
    const [nav, setNav] = useState("#home");

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>
                    Pineda
                </a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a
                                href='#home'
                                onClick={() => {
                                    setNav("#home");
                                }}
                                className={
                                    nav === "#home"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className='uil uil-estate nav__icon active-link'></i>
                                Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#about'
                                onClick={() => {
                                    setNav("#about");
                                }}
                                className={
                                    nav === "#about"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className='uil uil-user nav__icon'></i>
                                About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#skills'
                                onClick={() => {
                                    setNav("#skills");
                                }}
                                className={
                                    nav === "#skills"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className='uil uil-file-alt nav__icon'></i>
                                Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#services'
                                onClick={() => {
                                    setNav("#services");
                                }}
                                className={
                                    nav === "#services"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className='uil uil-briefcase-alt nav__icon'></i>
                                Services
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#portfolio'
                                onClick={() => {
                                    setNav("#portfolio");
                                }}
                                className={
                                    nav === "#portfolio"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className='uil uil-scenery nav__icon'></i>
                                Portfolio
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#contact'
                                onClick={() => {
                                    setNav("#contact");
                                }}
                                className={
                                    nav === "#contact"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className='uil uil-message nav__icon'></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className='uil uil-times nav__close'
                        onClick={() => setToggle(!toggle)}
                    ></i>
                </div>
                <div className='nav__toggle' onClick={() => setToggle(!toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
