"use client"; // This marks the file as a Client Component

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo-white.png';

export default function Header() {
    // State to keep track of whether the user is scrolling
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`d-none d-md-flex flex-wrap justify-content-center align-items-center py-3 px-5 ${isScrolling ? 'scrolling' : ''}`}
        >
            <a
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
                href="/"
            >
                <Image
                    src={logo}
                    alt="YES Employment Services logo"
                    className="float-start"
                    width={150} // Adjust width if necessary
                    height={50}  // Adjust height if necessary
                />
            </a>
            <ul className="nav d-none d-md-flex">
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
            <div className="clearfix"></div>
        </header>
    );
}
