import '../styles/home.scss';
import CompanyBanner from "../components/CompanyBanner";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="home-logo mt-4 mt-md-0"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/217cae59-fd83-415d-815f-6605b92a49f8/image-228x144.png"
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">WHAT WE DO</h1>
                    <div className="hr mb-3"></div>
                    <p className="section-one-description">
                        Link USA is a consulting and business advisory 
                        services franchise with a passion for assisting 
                        entrepreneurs with all-in-one investment and relocation 
                        concierge services for a move to the United States.
                        With a focus on  Spanish-speaking entrepreneurs, 
                        we can help you find the right investment opportunity
                        in the USA and ensure a smooth and seamless relocation
                        process. Our services include assistance with business
                        and real estate purchases, contract analysis and drafting,
                        business plan writing, and introduction into professional 
                        networks. We also provide personal assistance to help you 
                        open bank accounts, buy a house, find the right school for
                        your children, and more. 
                    </p>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="hr-section"></div>
            </div>

            <div className="container-lg d-flex flex-column flex-md-row align-items-center justify-content-md-around pt-5 pb-3">
                <h1 className="title mb-5 mb-md-0">HOW WE DO IT</h1>
                <div className="areas-list">
                    <p className="text-above-list">At Link USA we specialize in three areas:</p>
                    <p className="list-element mb-0">1. Investment Guidance </p>
                    <p className="list-element mb-0">2. Personal Support </p>
                    <p className="list-element mb-0">3. Professional Networks Access and Introduction</p>
                    <p className="text-under-list mt-3">While we assist all types of Spanish-speaking entrepreneurs, we focus specifically on Hispanic businesswomen and their families who are looking to invest in the USA.</p>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row flex-wrap justify-content-around pb-5">
                <div className="d-flex flex-column align-items-center text-center">
                    <img
                        className="area-logo"
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/13ca713d-95f3-416f-822f-30dd64d6ddcb/l0,t0,w2000,h1679/image-768x645.png"
                        alt="area-logo"
                    />
                    <h3 className="title">1. INVESTMENT GUIDANCE</h3>
                    <p className="description">We use our years of experience, deep industry knowhow, and strong local networks to link great investment opportunities with passionate entrepreneurs and businesspeople. We have expertise in business brokerage and real estate investment to help you find the perfect professional opportunity.</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                    <img
                        className="area-logo"
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/13ca713d-95f3-416f-822f-30dd64d6ddcb/l0,t0,w2000,h1679/image-768x645.png"
                        alt="area-logo"
                    />
                    <h3 className="title">1. INVESTMENT GUIDANCE</h3>
                    <p className="description">We use our years of experience, deep industry knowhow, and strong local networks to link great investment opportunities with passionate entrepreneurs and businesspeople. We have expertise in business brokerage and real estate investment to help you find the perfect professional opportunity.</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                    <img
                        className="area-logo"
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/13ca713d-95f3-416f-822f-30dd64d6ddcb/l0,t0,w2000,h1679/image-768x645.png"
                        alt="area-logo"
                    />
                    <h3 className="title">1. INVESTMENT GUIDANCE</h3>
                    <p className="description">We use our years of experience, deep industry knowhow, and strong local networks to link great investment opportunities with passionate entrepreneurs and businesspeople. We have expertise in business brokerage and real estate investment to help you find the perfect professional opportunity.</p>
                </div>
            </div>

            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="link-logo mt-4 mt-md-0"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/5c875528-30f6-4e3d-bbb3-574bf2723974/l89,t0,w1822,h2000/image-768x843.jpg"
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">BECOME A LINK USA FRANCHISEE</h1>
                    <div className="hr my-4"></div>
                    <p className="section-one-description">
                        Link USA is a consulting and business advisory 
                        services franchise with a passion for assisting 
                        entrepreneurs with all-in-one investment and relocation 
                        concierge services for a move to the United States.
                        With a focus on  Spanish-speaking entrepreneurs, 
                        we can help you find the right investment opportunity
                        in the USA and ensure a smooth and seamless relocation
                        process. Our services include assistance with business
                        and real estate purchases, contract analysis and drafting,
                        business plan writing, and introduction into professional 
                        networks. We also provide personal assistance to help you 
                        open bank accounts, buy a house, find the right school for
                        your children, and more. 
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link to="/contact" className="button py-2 px-3">LEARN MORE</Link>
                    </div>
                </div>
            </div>

            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="person-img mt-4 mt-md-0"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/775422a7-900f-472a-9c61-57eed9fa7b9a/l0,t166,w1500,h1500/image-768x768.jpg"
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">WHO WE ARE</h1>
                    <div className="hr my-4"></div>
                    <p className="section-one-description">
                        The Link USA team are highly qualified in a range of areas and have years of experience in relocation and travel services as well as business advisory assistance to clients.With deep expertise in real estate investment and business brokerage services, and a focus on assisting Latin American families, the Link USA team is passionate about guiding entrepreneurs through a successful transition to the US.
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link to="/team" className="button py-2 px-3">LEARN MORE</Link>
                    </div>
                </div>
            </div>

            <CompanyBanner
                title='LINK UP WITH US'
                description='To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.'
                buttonText='CONTACT US'
                buttonLink='/contact'
            />
        </div>
    );
}
