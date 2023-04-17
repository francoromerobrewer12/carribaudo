import { Link } from 'react-router-dom';
import '../styles/franchise_benefits.scss'
import { configuration } from '../configuration';

export default function FranchiseBenefits() {

    const { title, description, benefits_list, button_text } = configuration.franchise.benefits_section

    return (
        <div className="franchise-benefits-container container-lg py-5">
            <h1 className="title text-center text-md-start">{title}</h1>
            <p className="introduction text-center text-md-start my-4">{description}</p>

            <div className="benefits-container d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center mb-5">
                {
                    benefits_list.map(element => {
                        return <div key={element.id} className="benefit d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center my-3">
                            <img
                                src="https://www.linkusa.us/wp-content/uploads/go-x/u/42964fbc-c81f-4bd2-8106-ef3a0c189d36/l0,t0,w600,h469/image-375x293.png"
                                alt="benefit"
                                className="benefit-img"
                            />
                            <div>
                                <h3 className="title text-center text-md-start my-3 my-md-0">{element.title}</h3>
                                <p className="description text-center text-md-start">{element.text}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <Link to="/contact" className="button py-2 px-4">{button_text}</Link>
            </div>
        </div>
    );
}

