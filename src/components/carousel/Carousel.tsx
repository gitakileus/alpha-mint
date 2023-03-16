import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Carousel = (props: { Images: any | undefined }) => {
  
  const carosel = () =>
    props.Images.map((image: any, index: any) => {
      return (
        <div key={index} className='px-[4px]'>
          <img key={index} alt={index} src={image} className="w-full h-[250px]" />
        </div>
      );
    });

  return (
    <div>
      <Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        responsive = {[
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {carosel()}
      </Slider>
    </div>
  );
};

export default Carousel;
