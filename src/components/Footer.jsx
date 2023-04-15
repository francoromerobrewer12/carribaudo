import '../styles/footer.scss'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="Footer py-4">
            <div className="container-lg d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <img
                    className="logo"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/217cae59-fd83-415d-815f-6605b92a49f8/image-228x144.png"
                    alt="logo"
                />

                <div className="nav-items d-flex flex-column flex-sm-row align-items-center justify-content-between my-4 my-lg-0">
                    <Link to="/home" className="mx-3">LINK USA</Link>
                    <Link to="/franchise" className="mx-3">FRANCHISE WITH US</Link>
                    <Link to="/team" className="mx-3">TEAM</Link>
                    <Link to="/contact" className="mx-3">CONTACT</Link>
                </div>

                <p className="my-0">
                    © 2023. All rights reserved.
                    <a href="https://www.linkusa.us/privacy-policy/" className="privacy-terms my-0">Privacy Policy</a>
                    .
                </p>
            </div>
        </div>
    );
}

export default Footer;