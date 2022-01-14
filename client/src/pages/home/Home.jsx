import Header from '../../components/header/Header'
import './home.css';
import Banner
 from '../../components/banner/Banner';
export default function Home () {
    return(
        <div className='home'>
            <Header />
            <Banner />
        </div>
    )
}