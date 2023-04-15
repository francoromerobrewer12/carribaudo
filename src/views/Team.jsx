import '../styles/team.scss';
import CompanyBanner from "../components/CompanyBanner";

export default function Team() {
    return (
        <div className="Team">
            {/* Founder */}
            <div className="container-lg py-5">
                <h1 className="founder-name text-center text-sm-start">CAROLINA ACQUILA</h1>
                <div className="founder-content-container d-flex flex-column-reverse flex-sm-row justify-content-center justify-content-sm-between align-items-center">
                    <div className="founder-description">
                        <h3 className="role text-center text-sm-start">Founder & CEO</h3>
                        <p className="mb-2">Mrs. Acquila has an extensive background in providing relocation, travel, real estate investment services, and business brokerage for prospective US investors from Latin America. Since arriving in the US in 2018, she has co-founded two travel agencies as well as two businesses specializing in helping Latin American investors and Hispanic businesswomen invest and succeed in the US. </p>
                        <p className="mb-2">Prior to her US ventures, she worked as a founding partner of a law firm where she handled the civil, commercial, and immigration practices and was a co-founder of a family-owned transportation company, both in Buenos Aires, Argentina. She was a paralegal before that and also fulfilled the role of Operations Manager with another family-owned transportation business.</p>
                        <p>Mrs. Acquila holds a law diploma from Argentina and has a Florida realtor license and business broker license.</p>
                    </div>
                    <img src="https://www.linkusa.us/wp-content/uploads/go-x/u/0b0d9c04-baf6-4272-b961-aae58fa1899a/l0,t0,w2000,h2000/image-768x768.png" alt="founder" className="founder-img my-4 my-sm-0"/>
                </div>
            </div>
            {/* Founder */}

            {/* Experience */}
            <div className="experience-container container-lg d-flex flex-column align-items-center justify-content-start py-5">
                <h1 className="text-center text-sm-start mb-4">PROFESSIONAL EXPERIENCE</h1>
                <div className="d-flex flex-column align-items-start">
                    <p>2023 – Present: Link USA LLC, CEO, Sole Member & Founder,  (FL, USA)</p>
                    <p>2022 – Present: Women in Business Group LLC, Co-Founder, (FL, USA)</p>
                    <p>2022 – Present: One Veyt LLC, Co-Founder & President, (FL, USA)</p>
                    <p>2021 – Present: Casa Argentina en Florida Central LLC, Founder, (FL, USA)</p>
                    <p>2020 – Present: Carolina Acquila LLC, CEO & Founder, (FL, USA)</p>
                </div>
            </div>
            {/* Experience */}

            {/* Studies */}
            <div className="studies-container container-lg d-flex flex-column align-items-center justify-content-start py-5">
                <h1 className="text-center text-sm-start mb-4">EDUCATION & MEMBERSHIPS</h1>
                <div className="d-flex flex-column align-items-start">
                    <h5>EDUCATION</h5>
                    <p>2022: Climer School / Gold Coast School Real Estate and Business Broker Training; Florida Realtor License; Florida Business Broker License</p>
                    <p>2021: Certifications in B1/B2 Visa Extensions, Immigration Updates, Immigration Paralegal Training, Employment based Residency by the Paralegal Institutes of America</p>
                    <p>2020: Florida Realtor License; Florida Business Broker License</p>
                    <p>2016: Law Diploma, Universidad de Moron, Buenos Aires, Argentina</p>

                    <h5>MEMBERSHIPS</h5>
                    <p>2022 - Today: Women’s Council of Realtors, Orlando, FL</p>
                    <p>2021 - Today: Volunteer of “Together and Free”, a non-profit association for low income immigrant families</p>
                    <p>2019 - Today: Volunteer at the Argentinean Elementary school in Miami</p>
                    <p>2018 - Today: Volunteer for the Orlando Chapter of the Argentinian Consulate of Miami</p>
                    <p>2016 - Today: Argentinian Bar Association</p>
                </div>
            </div>
            {/* Studies */}

            <CompanyBanner
                title='LINK UP WITH US'
                description='To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.'
                buttonText='CONTACT US'
                buttonLink='/contact'
            />
        </div>
    );
}