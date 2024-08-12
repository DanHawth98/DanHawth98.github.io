import Header from '../includes/header';
import Footer from '../includes/footer';
import Image from 'next/image'
import candidatesImage from '../../assets/images/home-hero-image.jpeg';

export default function Candidates() {
  return (
    <>
        <main id="about-body">

            <Header />

            <div id="page-hero">
                <h1>Candidates</h1>
            </div>

            <div className="body-content-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <h2 className="fw-bold">New role? Register with YES</h2>
                            <p>Over the years we’ve successfully placed IT & Digital candidates with clients in a variety of industries and sectors including hospitality, retail, manufacturing, insurance, live entertainment, Formula 1, travel, premier league football, property, higher education, not for profit, healthcare and charities amongst others.</p>
                            <p>So, if you’re looking for a new role, why not submit your CV and register with YES. Whether it be permanent or contract work you’re after, we’ll get in touch to discuss your current situation and future aspirations to see if we can provide you with a suitable opportunity.</p>
                            <p>We’ll also be happy to share with you current employment market conditions and advise on ways you may want to explore to help with your job search.</p>
                            <p>For a confidential, no obligation discussion, please call us on <a href="tel:01252204613">01252 204613</a></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <Image
                                src={candidatesImage}
                                alt="YES employment services logo"
                                className="rounded shadow"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                        <div className="col-12 text-center pt-5">
                            <small><strong>Candidate Privacy</strong>: By giving us personal information you are consenting to us processing this for work finding purposes. For further details please refer to our Privacy Policy <a href="#">www.youngsemplyment.com/cm/policy</a>.</small>
                        </div>
                    </div>
                </div>

                <div className="container container-background-blue">
                    <div className="row">
                        <div className="col-12 col-md-10 text-center text-md-start">
                            <p className="m-0">If you'd like to know more about how YES can help find a new member for your team then please get in touch via email, telephone filling out the contact form below.</p>
                        </div>
                        <div className="col-12 col-md-2 text-center text-md-end mt-4 mt-md-0">
                            <a className="btn btn-lg btn-light bg-white" href="/contact-us">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            
        </main>
    </>
  );
}
