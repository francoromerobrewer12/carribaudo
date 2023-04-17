import '../styles/home.scss';
import { Link } from 'react-router-dom';
import { configuration } from '../configuration';
import CompanyBanner from "../components/CompanyBanner";

export default function Home() {

    const {
        section_one,
        section_two,
        section_three,
        section_four,
        company_banner_title,
        company_banner_text,
        company_banner_image,
        company_banner_button_text
    } = configuration.home

    return (
        <div className="Home">
            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="home-logo mt-4 mt-md-0"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/217cae59-fd83-415d-815f-6605b92a49f8/image-228x144.png"
                    alt="logo"
                />
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
                                src="https://www.linkusa.us/wp-content/uploads/go-x/u/13ca713d-95f3-416f-822f-30dd64d6ddcb/l0,t0,w2000,h1679/image-768x645.png"
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
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/5c875528-30f6-4e3d-bbb3-574bf2723974/l89,t0,w1822,h2000/image-768x843.jpg"
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">{section_three.title}</h1>
                    <div className="hr my-4"></div>
                    {
                        section_three.texts.map((element) => <p key={element.id} className="section-one-description">{element.text}</p>)
                    }
                    <div className="d-flex justify-content-center">
                        <Link to="/contact" className="button py-2 px-3">{section_three.button_text}</Link>
                    </div>
                </div>
            </div>

            <div className="container-lg d-flex flex-column-reverse flex-md-row justify-content-md-around align-items-center py-5">
                <img
                    className="person-img mt-4 mt-md-0"
                    src="https://www.linkusa.us/wp-content/uploads/go-x/u/775422a7-900f-472a-9c61-57eed9fa7b9a/l0,t166,w1500,h1500/image-768x768.jpg"
                    alt="logo"
                />
                <div className="section-one-text-wrapper text-center text-md-start">
                    <h1 className="title">{section_four.title}</h1>
                    <div className="hr my-4"></div>
                    {
                        section_four.texts.map((element) => <p key={element.id} className="section-one-description">{element.text}</p>)
                    }
                    <div className="d-flex justify-content-center">
                        <Link to="/team" className="button py-2 px-3">{section_four.button_text}</Link>
                    </div>
                </div>
            </div>

            <CompanyBanner
                title={company_banner_title}
                description={company_banner_text}
                buttonText={company_banner_button_text}
                buttonLink='/contact'
            />
        </div>
    );
}
