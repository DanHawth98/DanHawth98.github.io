import Image from 'next/image'
import logo from '../assets/images/logo-white.png';
import Header from './includes/header';
import Footer from './includes/footer';

export default function Home() {
  return (
    <>
        <main>

            <Header />

            <div>
                <div id="home-page-background-image"></div>

                <video autoPlay muted loop id="home-page-video">
                    <source src="/video/home.mp4" type="video/mp4"></source>
                </video>

                <div id="home-page-content">
                    <Image
                        src={logo}
                        alt="YES employment services logo"
                    />
                    <h1>delivering better business results</h1>
                    <button className="btn btn-lg btn-primary mr-2">I'm looking to hire</button>
                    <button className="btn btn-lg btn-secondary">I'm looking for a new role</button>
                </div>
            </div>

            <Footer 
                isHomePageFooter={true}
            />
            
        </main>
    </>
  );
}
