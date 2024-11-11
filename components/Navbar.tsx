"use client"
import React from 'react';
import Link from 'next/link';

function Navbar() {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        if (menu && icon) {
            menu.classList.toggle("open");
            icon.classList.toggle("open");
        }
    }

    return (
        <div>
            <nav id="desktop-nav">
                <Link href="/"
                    className="logo">Ayesha Abdul Qadir</Link>
                <div>
                    <ul className="nav-links">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/experience">Experience</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <nav id="hamburger-nav">
                <Link href="/" className="logo">Ayesha Abdul Qadir</Link>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="menu-links">
                        <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link href="/experience" onClick={toggleMenu}>Experience</Link></li>
                        <li><Link href="/projects" onClick={toggleMenu}>Projects</Link></li>
                        <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </div>

                </div>
            </nav>
        </div >
    );
}

export default Navbar;
