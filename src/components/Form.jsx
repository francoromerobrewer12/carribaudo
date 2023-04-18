import '../styles/form.scss'
import { configuration } from '../configuration';

export default function Form() {

    const { logo_image, email_address } = configuration.contact

    return (
        <div className="form-container d-flex justify-content-center py-5 w-100">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-sm-around">
                <img
                    className="logo mb-4 mb-md-0"
                    src={logo_image}
                    alt="form-logo"
                />
                <div className="form-wrapper d-flex flex-column justify-content-center align-items-start">
                    <label htmlFor="name">Name*</label>
                    <input type="text" name="name" id="name" className="w-100 mb-2"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5"></textarea>
                    <small className="my-2">* Indicates required fields</small>
                    <button className="submit-button py-2 mb-2 w-100" type="submit">Send</button>
                    <small>Email: {email_address}</small>
                </div>
            </div>
        </div>
    );
}