import CompanyBanner from "../components/CompanyBanner";
import FranchiseBenefits from "../components/FranchiseBenefits";
import ReasonsToFranchise from "../components/ReasonsToFranchise";

export default function Franchise() {
    return (
        <div className="Franchise">
            <ReasonsToFranchise />
            <FranchiseBenefits />
            <CompanyBanner
                title='LINK UP WITH US'
                description='To find out more about how we can help you with your move to the USA, or to learn more about our franchise opportunities, please get in touch. We would love to connect.'
                buttonText='CONTACT US'
                buttonLink='/contact'
            />
        </div>
    );
}

