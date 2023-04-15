import CompanyBanner from "../components/CompanyBanner";

export default function Team() {
    return (
        <div className="Team">
            <h1>Team</h1>
            <CompanyBanner
                title='LINK UP WITH US'
                description='To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.'
                buttonText='CONTACT US'
                buttonLink='/contact'
            />
        </div>
    );
}