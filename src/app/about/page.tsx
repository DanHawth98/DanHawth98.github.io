import Header from '../includes/header';
import Footer from '../includes/footer';
import MobileHeader from "@/app/includes/mobile-header";

export default function About() {
  return (
    <>
        <main id="about-body">

            <Header />
            <MobileHeader />

            <div id="page-hero">
                <h1>About Us</h1>
            </div>

            <div className="body-content-section">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="text-center">
                            <p>Wayne Young created Young’s Employment Services following redundancy from his previous employer. Able to draw upon over 24 years extensive IT Recruitment experience, Wayne provides personal, honest, objective and transparent help and advice on people, job and career related issues.</p>

                            <p>Having worked with clients from a wide range of sectors including hospitality, retail, manufacturing, insurance, live entertainment, F1, premier league, property, travel, higher education, charity and healthcare amongst others. This has provided a deep understanding of the many differences in the culture, structure and operations within workplace environments and that’s invaluable when matching candidates with clients.</p>

                            <p>Having successfully recruited IT & Digital resource from Service Desk to C-level and everything in between, YES is well placed to help with almost any requirement.</p>

                            <p>YES aspires to be a trusted client and candidate centred, recruitment partner for the IT & Digital community. We’d love to hear from you if you require any assistance.</p>
                            <div className="pt-4">
                                <button className="btn bgn-lg btn-primary mb-3 mr-2">I'm looking to hire</button>
                                <button className="btn bgn-lg btn-light mb-3">I'm looking for a new role</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
            
        </main>
    </>
  );
}
