import React from "react";
import landingImg from "../assets/images/landing-img.png";
import DiscoverServices from "../components/home/DiscoverServices";
import Video from "../components/home/Video";
import Carousel from "../components/home/Carousel";

const Home = () => {
  return (
    <main className="container">
      <section className="welcome-banner">
        <img src={landingImg} alt="banner image" className="banner-img" />
        <div className="banner-content">
          <h4 className="text1">Visit Mountains in</h4>
          <h1 className="text2">italy</h1>
          <button className="btn see-offer_btn">see offer</button>
        </div>
      </section>
      <section className="services">
        <DiscoverServices />
      </section>
      <section className="video">
        <Video />
      </section>
      <section className="carousel">
        <h1 className="carousel-title">Popular Tour Offers</h1>
        <Carousel />
      </section>
    </main>
  );
};

export default Home;
