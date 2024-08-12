import Header from '../includes/header';
import Footer from '../includes/footer';

export default function About() {
  return (
    <>
        <main id="about-body">

            <Header />

            <div id="page-hero">
                <h1>About Us</h1>
            </div>

            <div className="body-content-section">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="text-center">
                            <p>Wayne Young decided to start Young’s Employment Services following redundancy from his previous employer.</p>
                            <p>YES aspire to be a trusted client and candidate centred, problem-solving partner for the IT & Digital community. Built on strong principles and extensive IT Recruitment experience having worked in his last role for over 23 years as a senior member of the team, Wayne will provide personal, honest, objective and transparent help and advice on a range of people, job and career related issues.</p>
                            <p>He’s worked with clients from a wide range of industries including hospitality, retail, manufacturing, insurance, live entertainment, Formula 1, travel, premier league, property, higher education, not for profit, charity and healthcare amongst others. This experience with such a broad range of clients has given Wayne a reel feel and understanding of the many complexities and dynamics in the cultural, structural and operational environments that exist within different types of businesses and organisations.</p>
                            <p>Whether it be start-up, SME or enterprise level, not for profit, private or public sector, highly regulated and process driven, mature or immature in good practice and governance, big teams or small teams, Wayne has successfully recruited IT & Digital resource from Service Desk to C-level and everything in between.</p>
                            <div className="pt-4">
                                <button className="btn bgn-lg btn-primary mr-2">I'm looking to hire</button>
                                <button className="btn bgn-lg btn-light">I'm looking for a new role</button>
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
