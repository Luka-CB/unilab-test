import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { tours } from "../../data";
import { useContext } from "react";
import { WindowContext } from "../../context/features/window";

const Carousel = () => {
  const { windowWidth } = useContext(WindowContext);

  return (
    <>
      <Swiper
        slidesPerView={
          windowWidth < 780
            ? 1
            : windowWidth > 780 && windowWidth < 1500
            ? 2
            : windowWidth > 1500 && windowWidth < 1880
            ? 3
            : 4
        }
        spaceBetween={30}
        className="swiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <div className="btns">
          <SwipePrev />
          <SwipeNext />
        </div>
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <div className="card">
              <div className="image">
                <img src={tour.imageUrl} alt={tour.city} />
              </div>
              <h1 className="line1">
                {tour.city}, {tour.country}
              </h1>
              <h3 className="line2">
                {tour.people} adults, {tour.duration} days
              </h3>
              <h3 className="line3">${tour.price}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const SwipeNext = () => {
  const swiper = useSwiper();

  return (
    <button className="icon-btn" onClick={() => swiper.slideNext()}>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </button>
  );
};

const SwipePrev = () => {
  const swiper = useSwiper();

  return (
    <button className="icon-btn" onClick={() => swiper.slidePrev()}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
  );
};

export default Carousel;
