import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { volunteer } from '../../../dummyData';
import './slider.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export default function Slider() {
    return (
        <div className="slider">
           <div className="sliderContainer">
                <Carousel 
                    responsive={responsive}
                    showDots={true}
                >
                    {volunteer && volunteer.map((item,idx) => (
                        <div className="sliderItem" key={idx} style={{ paddingTop: '100%', backgroundImage: `url('${item.img}')`}}>
                        </div>
                    ))}
                </Carousel>
           </div>
        </div>
        
    )
}

