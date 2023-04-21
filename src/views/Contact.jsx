import Form from "../components/Form";
import { configuration } from "../configuration";
import CompanyBanner from "../components/CompanyBanner";
import ContactBanner from "../components/ContactBanner";

export default function Contact() {

    const {
        company_banner_title,
        company_banner_text,
        company_banner_image,
        company_banner_button_text
    } = configuration.contact
    const { view_one } = configuration.navigation

    return (
        <div className="Contact">
            <ContactBanner />
            <Form />
            <CompanyBanner
                title={company_banner_title}
                description={company_banner_text}
                buttonText={company_banner_button_text}
                image={company_banner_image}
                buttonLink={view_one.link}
            />
        </div>
    );
}
