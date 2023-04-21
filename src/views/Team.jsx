import '../styles/team.scss';
import { configuration } from '../configuration';
import CompanyBanner from "../components/CompanyBanner";


export default function Team() {

    const {
        person_name,
        person_role,
        person_image,
        person_description,
        experience_title,
        experience_data,
        education_section_title,
        education_content_sections,
        company_banner_title,
        company_banner_image,
        company_banner_text,
        company_banner_button_text
    } = configuration.team
    const { contact } = configuration.navigation

    return (
        <div className="Team">
            {/* Founder */}
            <div className="container-lg py-5">
                <h1 className="founder-name text-center text-sm-start">{person_name}</h1>
                <div className="founder-content-container d-flex flex-column-reverse flex-sm-row justify-content-center justify-content-sm-between align-items-center">
                    <div className="founder-description">
                        <h3 className="role text-center text-sm-start">{person_role}</h3>
                        {
                            person_description.map(element => <p key={element.id} className="mb-2">{element.text}</p>)
                        }
                    </div>
                    <img src={person_image} alt="founder" className="founder-img my-4 my-sm-0"/>
                </div>
            </div>
            {/* Founder */}

            {/* Experience */}
            <div className="experience-container container-lg d-flex flex-column align-items-center justify-content-start py-5">
                <h1 className="text-center text-sm-start mb-4">{experience_title}</h1>
                <div className="d-flex flex-column align-items-start">
                    {
                        experience_data.map((element) => {
                            return <p key={element.id}>{element.text}</p>
                        })
                    }
                </div>
            </div>
            {/* Experience */}

            {/* Studies */}
            <div className="studies-container container-lg d-flex flex-column align-items-center justify-content-start py-5">
                <h1 className="text-center text-sm-start mb-4">{education_section_title}</h1>
                <div className="d-flex flex-column align-items-start">
                    {
                        education_content_sections.map((element) => {
                            return <div key={element.id}>
                                <h5>{element.title}</h5>
                                {
                                    element.section_data.map((element) => {
                                        return <p key={element.id}>{element.text}</p>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div>
            {/* Studies */}

            <CompanyBanner
                title={company_banner_title}
                description={company_banner_text}
                buttonText={company_banner_button_text}
                image={company_banner_image}
                buttonLink={contact.link}
            />
        </div>
    );
}