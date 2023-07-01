import '../styles/home.scss';
// import { Link } from 'react-router-dom';
import TopBanner from '../components/TopBanner';
import { configuration } from '../configuration';

export default function Home() {

    const {
        banner,
    } = configuration.home

    return (
        <div className="Home">
            <TopBanner image={banner.image} text={banner.text}/>
        </div>
    );
}
