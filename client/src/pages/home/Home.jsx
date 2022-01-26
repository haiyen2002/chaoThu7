import Header from '../../components/header/Header'
import './home.css';
import Banner from '../../components/banner/Banner';
import Content from '../../components/content/Content';
import Footer from '../../components/footer/Footer';
export default function Home () {
    return(
        <div className='home'>
            <Header />
            <Banner />
            <Content />
            <Footer />
        </div>
    )
}