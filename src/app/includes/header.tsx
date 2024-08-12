import Image from 'next/image'
import logo from '../../assets/images/logo-white.png';

export default function Header() {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center align-items-center py-3 px-5">
                <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" href="/">
                    <Image
                        src={logo}
                        alt="YES employment services logo"
                        className="float-start"
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
                        <a className="nav-link" aria-current="page" href="/employers">Employers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/candidates">Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/contact-us">Contact Us</a>
                    </li>
                </ul>
                <div className="clearfix"></div>
            </header>
        </>
    );
}