import Form from "../components/Form";
import CompanyBanner from "../components/CompanyBanner";
import ContactBanner from "../components/ContactBanner";

export default function Contact() {
    return (
        <div className="Contact">
            <ContactBanner />
            <Form />
            <CompanyBanner
                title='FIND OUT MORE'
                description='We offer great franchise opportunities for entrepreneurs to provide our signature services to their own clients. Find out more how to tap into this growing market throughout the US.'
                buttonText='LEARN MORE'
                buttonLink='/franchise'
            />
        </div>
    );
}
