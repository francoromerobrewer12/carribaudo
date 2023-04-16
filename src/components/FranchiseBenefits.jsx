import { Link } from 'react-router-dom';
import '../styles/franchise_benefits.scss'

export default function FranchiseBenefits() {
    return (
        <div className="franchise-benefits-container container-lg py-5">
            <h1 className="title text-center text-md-start">WHY FRANCHISE WITH US?</h1>
            <p className="introduction text-center text-md-start my-4">Link USA will provide the following support to its franchisees:</p>

            <div className="benefits-container d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center mb-5">
                <div className="benefit d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center my-3">
                    <img
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/42964fbc-c81f-4bd2-8106-ef3a0c189d36/l0,t0,w600,h469/image-375x293.png"
                        alt="benefit"
                        className="benefit-img"
                    />
                    <div>
                        <h3 className="title text-center text-md-start my-3 my-md-0">Training</h3>
                        <p className="description text-center text-md-start">
                            All franchisees will go through an intensive 
                            training program to ensure their skills and knowledge
                            of Link USA's best practices. This will include 
                            training and required certifications in relocation 
                            and travel assistance, business brokerage activities, 
                            and real estate investment services.
                        </p>
                    </div>
                </div>
                <div className="benefit d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center my-3">
                    <img
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/42964fbc-c81f-4bd2-8106-ef3a0c189d36/l0,t0,w600,h469/image-375x293.png"
                        alt="benefit"
                        className="benefit-img"
                    />
                    <div>
                        <h3 className="title text-center text-md-start my-3 my-md-0">Training</h3>
                        <p className="description text-center text-md-start">
                            All franchisees will go through an intensive 
                            training program to ensure their skills and knowledge
                            of Link USA's best practices. This will include 
                            training and required certifications in relocation 
                            and travel assistance, business brokerage activities, 
                            and real estate investment services.
                        </p>
                    </div>
                </div>
                <div className="benefit d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center my-3">
                    <img
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/42964fbc-c81f-4bd2-8106-ef3a0c189d36/l0,t0,w600,h469/image-375x293.png"
                        alt="benefit"
                        className="benefit-img"
                    />
                    <div>
                        <h3 className="title text-center text-md-start my-3 my-md-0">Training</h3>
                        <p className="description text-center text-md-start">
                            All franchisees will go through an intensive 
                            training program to ensure their skills and knowledge
                            of Link USA's best practices. This will include 
                            training and required certifications in relocation 
                            and travel assistance, business brokerage activities, 
                            and real estate investment services.
                        </p>
                    </div>
                </div>
                <div className="benefit d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center my-3">
                    <img
                        src="https://www.linkusa.us/wp-content/uploads/go-x/u/42964fbc-c81f-4bd2-8106-ef3a0c189d36/l0,t0,w600,h469/image-375x293.png"
                        alt="benefit"
                        className="benefit-img"
                    />
                    <div>
                        <h3 className="title text-center text-md-start my-3 my-md-0">Training</h3>
                        <p className="description text-center text-md-start">
                            All franchisees will go through an intensive 
                            training program to ensure their skills and knowledge
                            of Link USA's best practices. This will include 
                            training and required certifications in relocation 
                            and travel assistance, business brokerage activities, 
                            and real estate investment services.
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Link to="/contact" className="button py-2 px-4">FIND OUT MORE</Link>
            </div>
        </div>
    );
}

