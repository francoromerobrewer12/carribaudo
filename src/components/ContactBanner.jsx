
import '../styles/contact_banner.scss'

export default function ContactBanner() {
    return (
        <div className="contact-container d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
            <img
                className="img mb-5 mb-sm-0"
                src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="logo"
            />

            <div className="banner-info p-4">
                <h1 className="banner-title">LINK UP WITH US</h1>
                <p className="mb-2">To learn more about how we can help you relocate to the US, or how to franchise with us, please leave your details or link up with us through the contact form below.</p>
                <p>We'd love to see how we can help.</p>
            </div>
        </div>
    );
}