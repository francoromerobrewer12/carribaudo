import '../styles/footer.scss'
import { Link } from 'react-router-dom';
import { configuration } from '../configuration';

export default function Footer() {

    const { logo } = configuration.footer
    const { home, view_one, view_two, contact } = configuration.navigation


    return (
        <div className="Footer py-4">
            <div className="container-lg d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <a href={home.link} className="logo">
                    <img
                        className="w-100 h-100"
                        src={logo}
                        alt="logo"
                    />
                </a>
                <div className="nav-items d-flex flex-column flex-sm-row align-items-center justify-content-between my-4 my-lg-0">
                    <Link to={home.link} className="mx-3">{home.name}</Link>
                    <Link to={view_one.link} className="mx-3">{view_one.name}</Link>
                    <Link to={view_two.link} className="mx-3">{view_two.name}</Link>
                    <Link to={contact.link} className="mx-3">{contact.name}</Link>
                </div>

                <p className="text-center text-sm-right my-0">
                    © 2023. All rights reserved.
                    <a href="https://www.linkusa.us/privacy-policy/" className="privacy-terms my-0">Privacy Policy</a>
                    .
                </p>
            </div>
        </div>
    );
}