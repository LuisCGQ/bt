import React from "react";
import Service from "./Service";
import selection from "../assets/img1.webp"
import service from "../assets/img2.jpeg"
import pricing from "../assets/img3.jpeg"

const Services = () => {
  return (
    <div className="services container section">
      <h2>More about us... </h2>
      <div className="d-flex justify-content-between">
        <Service
          img={selection}
          title="Selection"
          body="With access to over 100,000 new and pre-owned vehicles, chances are we have the exact car you're looking for, right down to the color and the trim level."
          link="/"
        />
        <Service
          img={pricing}
          title="Pricing"
          body="Our pricing isn't just low, it's smarter. We've researched and compared thousands of vehicle prices to give you a great value on every vehicle, upfront. So, you'll save time and money."
          link="/"
        />
        <Service
          img={service}
          title="Service"
          body="Bringing your vehicle to the largest service, parts and collision repair network in the country has its advantages. Your car will always be serviced by a factory trained and certified technician. We even guarantee every repair for 12 months or 12,000 miles."
          link="/"
        />
      </div>
    </div>
  );
};

export default Services;
