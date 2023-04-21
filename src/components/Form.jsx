import '../styles/form.scss'
import emailjs from 'emailjs-com'
import { useState, useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { configuration } from '../configuration'
import { ToastContainer, toast } from 'react-toastify';

export default function Form() {

    const form = useRef()
    const { logo_image, email_address, service_id, template_id, api_key } = configuration.contact
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()

        emailjs.sendForm(service_id, template_id, form.current, api_key)
            .then((result) => {
                toast.success('Your email was successfully sent!')
            }, (error) => {
                toast.error('Your email could not be sent.')
            });

        setName('')
        setMessage('')
        setEmail('')
    }

    return (
        <div className="form-container d-flex justify-content-center py-5 w-100">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-sm-around">
                <img
                    className="logo mb-4 mb-md-0"
                    src={logo_image}
                    alt="form-logo"
                />
                <form
                    ref={form}
                    className="form-wrapper d-flex flex-column justify-content-center align-items-start"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name">Name*</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-100 mb-2"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="w-100 mb-2"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                    <small className="required-fields my-2">* Indicates required fields</small>
                    <button className="submit-button py-2 mb-2 w-100" type="submit">Send</button>
                    <small className="company-email">Email: {email_address}</small>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}