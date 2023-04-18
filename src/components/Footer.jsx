import '../styles/footer.scss'
import { Link } from 'react-router-dom';
import { configuration } from '../configuration';

export default function Footer() {

    const { logo } = configuration.footer

    return (
        <div className="Footer py-4">
            <div className="container-lg d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <img
                    className="logo"
                    src={logo}
                    alt="logo"
                />

                <div className="nav-items d-flex flex-column flex-sm-row align-items-center justify-content-between my-4 my-lg-0">
                    <Link to="/" className="mx-3">LINK USA</Link>
                    <Link to="/franchise" className="mx-3">FRANCHISE WITH US</Link>
                    <Link to="/team" className="mx-3">TEAM</Link>
                    <Link to="/contact" className="mx-3">CONTACT</Link>
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