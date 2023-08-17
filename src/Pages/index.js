import React, { useState } from "react";
import NavBar from "./NavBar/navbar";
import landingPageStyle from "./landingPageStyle.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import AllPlan from "./AllPlans/allPlans"
import Contact from "./Contact/contactPage"


const lps = landingPageStyle;

function LandingPage() {
  const img = require("../assets/travel_img1.avif");
  const img1 = require("../assets/travel_img2.avif");
  const img2 = require("../assets/travel_img3.avif");


  const imageSources = [img, img1, img2];

 
  return (
    <div>
      <div className={lps.landingPageContainer}>
        <NavBar />
        <div id="Home" className={lps.homeMainContainer}>
          <div className={lps.homeContainer}>
            <p style={{ fontSize: "larger", fontWeight: "bold" }}>
              Welcome to our Travel Planner!
            </p>
            <p>
              Welcome to our Travel Planner! Are you ready to embark on a
              journey filled with exciting adventures, breathtaking landscapes,
              and unforgettable experiences?
            </p>
            <p>
              Our travel planner is designed to help you plan the trip of a
              lifetime. Whether you're a seasoned traveler or setting off on
              your very first adventure, we've got you covered.
            </p>
            <p>
              Travel is a transformative and enriching experience that opens our
              eyes to the beauty and diversity of the world. It allows us to
              step outside our comfort zones, embrace new cultures, and create
              cherished memories that last a lifetime.
            </p>
          </div>
        </div>
        <div>
          <div id="About" className={lps.carosalMainBox}>
           <div className={lps.leftRight}>
            <div className={lps.about_left}>
              <div className={lps.homeCarosalContainer}>
                <Carousel
                  showArrows={true}
                  autoPlay={true}
                  interval={5000} // Adjust the interval time in milliseconds (5 seconds in this example)
                  showThumbs={false}
                  infiniteLoop={true}
                  className="custom-carousel"
                >
                  {imageSources.map((source, index) => (
                    <div key={index} className="carousel-image-container">
                      <img
                        src={source}
                        alt={`Carousel Slide ${index + 1}`}
                        className="carousel-image"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className={lps.about_right}>
              <div style={{fontSize:"larger",fontWeight:"bold"}}>
                Welcome to our Travel Planner – Your Gateway to Memorable
                Journeys!
              </div>
              <div>
                At Travel Planner, we believe that every journey should be a
                cherished adventure. Our platform is designed to make travel
                planning a breeze, offering a seamless and personalized
                experience for all our travellers. Whether you're exploring
                exotic destinations or seeking serene getaways, we've got you
                covered.
              </div>
              <div>
                With a user-friendly interface and a wide range of travel
                options, you can customize your itinerary to suit your
                preferences and budget. Our team of passionate travel experts is
                always ready to assist you, ensuring you get the most out of
                your travel experience.
              </div>
              <div>
                Discover the world with ease and confidence with Travel Planner.
                Let's embark on unforgettable journeys together, traveling
                beyond boundaries!
              </div>
            </div>
            </div>
            <div className={lps.aboutTitle} >
            The world is a book, and those who do not travel read only one page
          </div>
          </div>
        </div>
        <div id="AllPlan">
          <div>
            <AllPlan/>
          </div>
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
