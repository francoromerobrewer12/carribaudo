import TopBanner from "../components/TopBanner";
import { configuration } from "../configuration";
import CompanyBanner from "../components/CompanyBanner";
import FranchiseBenefits from "../components/FranchiseBenefits";
import ReasonsToFranchise from "../components/ReasonsToFranchise";

export default function Franchise() {

    const {
        banner,
        company_banner_title,
        company_banner_text,
        company_banner_image,
        company_banner_button_text
    } = configuration.franchise
    const { contact } = configuration.navigation

    return (
        <div className="Franchise">
            <TopBanner image={banner.image} text={banner.text}/>
            <ReasonsToFranchise />
            <FranchiseBenefits />
            <CompanyBanner
                title={company_banner_title}
                description={company_banner_text}
                buttonText={company_banner_button_text}
                image={company_banner_image}
                buttonLink={contact.link}
            />
        </div>
    );
}

