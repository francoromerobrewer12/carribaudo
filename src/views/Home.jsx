import '../styles/home.scss';
// import { Link } from 'react-router-dom';
import TopBanner from '../components/TopBanner';
import { configuration } from '../configuration';
import PersonalInfo from '../components/PesonInfo';
import LinkToPages from '../components/LinkToPages';

export default function Home() {

    const {
        banner,
    } = configuration.home

    return (
        <div className="Home">
            <TopBanner image={banner.image} title={banner.title} text={banner.text}/>
            <PersonalInfo />
            <LinkToPages />
        </div>
    );
}
