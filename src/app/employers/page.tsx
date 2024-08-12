import Header from '../includes/header';
import Footer from '../includes/footer';
import Image from 'next/image'
import candidatesImage from '../../assets/images/home-hero-image.jpeg';

export default function Employers() {
  return (
    <>
        <main id="about-body">

            <Header />

            <div id="page-hero">
                <h1>Employers</h1>
            </div>

            <div className="body-content-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <h2 className="fw-bold">Your IT & Digital Recruitment Partner</h2>
                            <p>YES has over 20 years extensive experience helping organisations recruit IT & Digital resource for permanent, contract and fixed term assignments.</p>
                            <p>We act as an extension to your own team making sure we always represent and promote your brand in a positive way. Whether it’s IT Service Desk Analyst or Infrastructure Engineer, Desktop or Application Support, Business Analyst or Project Manager, Data Scientist or Data Engineer, Head of IT or IT Director, we have the experience and tools to take your requirement and deliver results.</p>
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
                                <h4>Position analyses</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Conducting thorough job analyses to understand position requirements and key skills, whilst challenging and setting realistic expectations.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Networking</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Utilising leading online job boards, CV databases, Linkedin, social media and existing contacts to identify, reach out and attract suitable candidates</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Thorough screening process</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Conducting thorough screening process to evaluate skills, experience and cultural fit in order to present the best available candidates.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Facilitating interviews</h4>
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
                                <h4>Industry trends and standards</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Staying updated on industry trends, salary benchmarks, and competitor activities to provide market insights to clients.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 what-we-do-card">
                            <div className="what-we-do-card-content">
                                <h4>Legal and ethical compliance</h4>
                                <div className="what-we-do-title-break"></div>
                                <p>Ensure legal and ethical compliance throughout the recruitment process, maintaining accurate and up-to-date documentation.</p>
                            </div>
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
