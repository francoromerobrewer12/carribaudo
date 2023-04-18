
import '../styles/contact_banner.scss'
import { configuration } from '../configuration';

export default function ContactBanner() {

    const {
        banner_title,
        banner_texts,
        banner_image
    } = configuration.contact

    return (
        <div className="contact-container d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
            <img
                className="img mb-5 mb-sm-0"
                src={banner_image}
                alt="logo"
            />

            <div className="banner-info p-4">
                <h1 className="banner-title">{banner_title}</h1>
                {
                    banner_texts.map(element => <p key={element.id} className="mb-2">{element.text}</p>)
                }
            </div>
        </div>
    );
}