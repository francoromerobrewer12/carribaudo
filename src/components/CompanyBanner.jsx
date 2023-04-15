
import '../styles/company_banner.scss'
import { Link } from 'react-router-dom';

export default function CompanyBanner({ title, description, buttonText, buttonLink }) {
    return (
        <div className="banner-container py-5">
            <div className="container-lg d-flex flex-column-reverse flex-sm-row align-items-center justify-content-center">
                <div className="banner-text-wrapper d-flex flex-column justify-content-center align-items-center align-items-sm-start">
                    <h1 className="banner-title text-center text-sm-start mb-4">{ title }</h1>
                    <p className="banner-description text-center text-sm-start w-75 mb-5">{ description }</p>
                    <Link to={buttonLink} className="banner-button py-2 px-3 my-0">{buttonText}</Link>
                </div>
                <img
                    className="banner-logo mb-5 mb-sm-0"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/9dd06bdd-d9a3-4824-b04b-59dd0b77e25e/image-342x216.png"
                    alt="logo"
                />
            </div>
        </div>
    );
}