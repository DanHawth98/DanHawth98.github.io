import Header from '../includes/header';
import Footer from '../includes/footer';
import ContactForm from "../../components/ContactForm";
import MobileHeader from "@/app/includes/mobile-header";

export default function ContactUs() {
  return (
    <>
        <main id="about-body">

            <Header />
            <MobileHeader />

            <div id="page-hero">
                <h1>Contact Us</h1>
            </div>

            <div className="body-content-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-12 col-md-6">
                            <p>If you'd like to know how YES can help you find a new member for your team, or if you’d
                                like to discuss how we can help find your next role, please call on <a
                                    href="tel:01252 204613">01252 204613</a> or fill in our contact form and we'll get
                                in touch as soon as we can.</p>
                            <p>
                                Young’s Employment Services Ltd<br/>
                                Delmon House (C/O Sigman Partners)<br/>
                                36-38 Church Road<br/>
                                Burgess Hill<br/>
                                West Sussex<br/>
                                RH15 9AE
                            </p>

                            <p>
                                <strong>Tel:</strong> <a href="tel:01252 204613">01252 204613</a><br />
                                <strong>Email:</strong> <a href="mailto:wayne@youngsemployment.com">wayne@youngsemployment.com</a>
                            </p>

                            <p>If you would like us to contact you, please fill out the form.</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </main>
    </>
  );
}
