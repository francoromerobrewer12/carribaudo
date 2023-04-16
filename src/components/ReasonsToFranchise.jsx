
import '../styles/reasons_to_franchise.scss'

export default function ReasonsToFranchise() {
    return (
        <div className="reasons-container container-lg d-flex flex-column align-items-center justify-content-center py-4">
            <h1 className="title text-center">
                WHY FRANCHISE WITH US?
            </h1>
            <p className="description mb-4">With an growing market that increasingly needs expert relocation and business advisory services, join us as part of a national franchise that focuses on providing excellent customer service and exceptional support to the Spanish-speaking entrepreneur community.</p>

            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-sm-around mt-3">
                <div className="mx-0 mx-lg-5 text-start text-lg-center">
                    <h2 className="title">1. A GROWING MARKET</h2>
                    <p>Latin American immigrants are one of the fastest growing segments of the US population. In 2019, there were more than 2.5 million Hispanic entrepreneurs in the US.</p>
                </div>
                <div className="mx-0 mx-lg-5 text-start text-lg-center">
                    <h2 className="title">2. A PROVEN CONCEPT</h2>
                    <p>The Link USA franchise is built on a foundation of industry best practice and years of successful experience in the field.</p>
                </div>
                <div className="mx-0 mx-lg-5 text-start text-lg-center">
                    <h2 className="title">3. ONGOING SUPPORT</h2>
                    <p>As a member of the Link USA family, we want you to be successful and are here to provide support throughout the journey to starting and growing a franchise in your area.</p>
                </div>
            </div>
        </div>
    );
}