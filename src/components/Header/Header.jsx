"use client"
import Link from "next/link"
import Btn from '@/elements/Btn/Btn'
import "./style.css"
import { BsJustify } from "react-icons/bs";
import { useState } from "react";


const Header = () => {
    const [showToggle, setShowToggle] = useState(false)
    const handleClickEven = () => {
        setShowToggle(!showToggle)
    }
    const [switchDark, setSwitchDark] = useState(true)
    const handleEventDarkMode = () => {
        setSwitchDark(!switchDark);
        const htmlElement = document.querySelector("html");
        if (switchDark) {
            htmlElement.style.colorScheme = "light";
            setShowToggle(!showToggle)
        } else {
            htmlElement.style.colorScheme = "dark";
            setShowToggle(!showToggle)
        }
    };
    const handleEventClickerOnLinkes = () => {
        setShowToggle(!showToggle)
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling effect
        });
    }
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href='/'><h2>Shopy</h2></Link>
                </div>
                <nav style={{ display: `${showToggle === true ? "block" : "none"}` }}>
                    <ul>
                        <li className="container-icons" onClick={() => handleEventDarkMode()}>
                            <div className="icons">🌚</div>
                            <div className="icons">🌕</div>
                            <div className="switch" style={{ left: `${switchDark == false ? "8px" : "36px"}` }}></div>
                        </li>
                        <li onClick={() => handleEventClickerOnLinkes()}><Link href="/" >Home</Link></li>
                        <li onClick={() => handleEventClickerOnLinkes()}><Link href="/about">About</Link></li>
                        <li onClick={() => handleEventClickerOnLinkes()}><Link href="/contact">Contact</Link></li>
                        <li onClick={() => handleEventClickerOnLinkes()}><Link href="/products">Products</Link></li>
                        <li>
                            <Btn name="logout" />
                        </li>
                    </ul>
                </nav>
                <BsJustify className="bars" onClick={() => handleClickEven()} />
            </div>
        </header>
    )
}

export default Header
