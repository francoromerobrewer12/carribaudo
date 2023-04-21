import '../styles/home.scss';
import { Link } from 'react-router-dom';
import TopBanner from '../components/TopBanner';
import { configuration } from '../configuration';
import CompanyBanner from "../components/CompanyBanner";

export default function Home() {

    const {
        banner,
        section_one,
        section_two,
        section_three,
        section_four,
        company_banner_title,
        company_banner_text,
        company_banner_image,
        company_banner_button_text
    } = configuration.home
    const { view_two, contact } = configuration.navigation

    return (
        <div className="Home">
            <TopBanner image={banner.image} text={banner.text}/>

            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">

                <img src={section_one.logo} className="home-logo mt-4 mt-md-0" alt="sda" />

                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">{section_one.title}</h1>
                    <div className="hr mb-3"></div>
                    {
                        section_one.texts.map(element => <p key={element.id} className="section-one-description mb-2">{element.text}</p>)
                    }
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="hr-section"></div>
            </div>

            <div className="container-lg d-flex flex-column flex-md-row align-items-center justify-content-md-around pt-5 pb-3">
                <h1 className="title mb-5 mb-md-0">{section_two.title}</h1>
                <div className="areas-list">
                    <p className="text-above-list">{section_two.above_list_text}</p>
                    {
                        section_two.list.map(element => <p key={element.id} className="list-element mb-0">{element.text}</p>)
                    }
                    <p className="text-under-list mt-3">{section_two.under_list_text}</p>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row flex-wrap justify-content-around pb-5">
                {
                    section_two.items.map(element => {
                        return <div key={element.id} className="d-flex flex-column align-items-center text-center">
                            <img
                                className="area-logo"
                                src={element.image}
                                alt="area-logo"
                            />
                            <h3 className="title">{element.title}</h3>
                            <p className="description">{element.text}</p>
                        </div>
                    })
                }
            </div>

            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="link-logo mt-4 mt-md-0"
                    src={section_three.image}
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">{section_three.title}</h1>
                    <div className="hr my-4"></div>
                    {
                        section_three.texts.map((element) => <p key={element.id} className="section-one-description">{element.text}</p>)
                    }
                    <div className="d-flex justify-content-center">
                        <Link to={contact.link} className="button py-2 px-3">{section_three.button_text}</Link>
                    </div>
                </div>
            </div>

            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="person-img mt-4 mt-md-0"
                    src={section_four.image}
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">{section_four.title}</h1>
                    <div className="hr my-4"></div>
                    {
                        section_four.texts.map((element) => <p key={element.id} className="section-one-description">{element.text}</p>)
                    }
                    <div className="d-flex justify-content-center">
                        <Link to={view_two.link} className="button py-2 px-3">{section_four.button_text}</Link>
                    </div>
                </div>
            </div>

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
