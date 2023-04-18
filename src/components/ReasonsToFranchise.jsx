
import '../styles/reasons_to_franchise.scss'
import { configuration } from '../configuration';

export default function ReasonsToFranchise() {

    const { title, text, reasons } = configuration.franchise.reasons_to_franchise

    return (
        <div className="reasons-container container-lg d-flex flex-column align-items-center justify-content-center py-5">
            <h1 className="title text-center">{title}</h1>
            <p className="description mb-4">{text}</p>

            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-sm-around mt-3">
                {
                    reasons.map(element => {
                        return <div key={element.id} className="mx-0 mx-lg-5 text-start text-lg-center">
                            <h2 className="title">{element.title}</h2>
                            <p>{element.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}