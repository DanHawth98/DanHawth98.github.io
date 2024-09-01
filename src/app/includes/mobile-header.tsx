"use client"; // This marks the file as a Client Component

import Image from 'next/image';
import logo from '../../assets/images/logo-white.png';
import { useState } from 'react';

export default function Header() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!isNavOpen);

    return (
        <>
            <header id="mobile-menu-nav" className="d-md-none d-flex flex-wrap justify-content-between align-items-center py-3 px-5 bg-dark text-light">
                <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none" href="/">
                    <Image
                        src={logo}
                        alt="YES employment services logo"
                        className="float-start"
                        width={150} // Adjust as needed
                        height={50} // Adjust as needed
                    />
                </a>

                <button
                    className="navbar-toggler d-md-none"
                    type="button"
                    onClick={toggleNav}
                >
                    <div className="navbar-toggler-bar navbar-toggler-icon-1"></div>
                    <div className="navbar-toggler-bar navbar-toggler-icon-2"></div>
                    <div className="navbar-toggler-bar navbar-toggler-icon-3"></div>
                </button>

                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} d-md-flex`}>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/clients">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/candidates">Candidates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
