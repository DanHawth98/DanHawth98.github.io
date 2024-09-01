import Header from '../includes/header';
import Footer from '../includes/footer';
import Image from 'next/image'
import candidatesImage from '../../assets/images/home-hero-image.jpeg';
import MobileHeader from "@/app/includes/mobile-header";

export default function Employers() {
  return (
    <>
        <main id="about-body">

            <Header />
            <MobileHeader />

            <div id="page-hero">
                <h1>Clients</h1>
            </div>

            <div className="body-content-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <h2 className="fw-bold">YES - Your IT & Digital Recruitment Partner</h2>
                            <p>We offer extensive experience helping organisations recruit IT & Digital resource for permanent, contract and fixed term assignments. Acting as an extension to your own team, we’ll always represent and promote your brand in a positive way. Whatever position you need to fill, we have the experience and tools to take your requirement and deliver results.</p>
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
                    </div>
                </div>

                <div id="employer-what-we-do-cards" className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="fw-bold">How we do it</h2>
                        </div>
                    </div>
                    <div className="row d-flex align-items-stretch justify-content-center g-3">
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Strong client relationships</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Cultivating strong client relationships to understand hiring needs, organisational culture and recruitment process.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Position Analysis</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Conducting thorough job analysis to understand position requirements and key skills, whilst challenging and setting realistic expectations.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Candidate Attraction</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Utilising various methods, including advertising on leading online job boards, searching internal and external job board CV databases, Linkedin Recruiter, social media and networking with existing contacts to identify, reach out and attract suitable candidates.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Candidate Selection</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Conducting thorough screening process to evaluate skills, experience and cultural fit in order to present the best available candidates.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Process Management</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Facilitating client-candidate interviews, managing scheduling and feedback for a smooth and efficient recruitment cycle.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Mediation</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Acting as a mediator between clients and candidates, facilitating negotiations and managing the offer process for successful placements.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Industry Trends and Standards</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Staying updated on industry trends, salary benchmarks, and market activities to provide insights to candidates and clients.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Legal and Ethical Compliance</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Ensure legal and ethical compliance throughout the recruitment process, maintaining accurate and up-to-date documentation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-background-blue">
                    <div className="row">
                        <div className="col-12 col-md-10 text-center text-md-start">
                            <p className="m-0">If you'd like to know more about how YES can help find a new member for your team, you can contact us by calling <a href="tel:01252 204613">01252 204613</a>, emailing <a href="mailto:info@youngsemployment.com">info@youngsemployment.com</a> or via the Contact Us tab.</p>
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
