import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faSnowflake,
  faUtensils,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";


const AboutComponent = () => {
  const [stats, setStats] = useState({
    popularity: 89,
    happyCustomers: 45,
    events: 0,
  });

  useEffect(() => {
    const timers = {
      popularity: setInterval(
        () =>
          setStats((stats) => ({ ...stats, popularity: stats.popularity + 1 })),
        20
      ),
      happyCustomers: setInterval(
        () =>
          setStats((stats) => ({
            ...stats,
            happyCustomers: stats.happyCustomers + 1,
          })),
        30
      ),
      events: setInterval(
        () => setStats((stats) => ({ ...stats, events: stats.events + 1 })),
        40
      ),
    };

    if (stats.popularity >= 1830) clearInterval(timers.popularity);
    if (stats.happyCustomers >= 1000) clearInterval(timers.happyCustomers);
    if (stats.events >= 267) clearInterval(timers.events);

    return () => {
      clearInterval(timers.popularity);
      clearInterval(timers.happyCustomers);
      clearInterval(timers.events);
    };
  }, [stats]);

  return (
    <div id="about">
      {/* Our Story Section */}
      <div className="bg-white py-16">
        {" "}
        {/* Increased padding here */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center">
          {/* Text on the Left */}
          <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Tamara Bakery started with a passion for high-quality baked goods
              made from scratch. From our humble beginnings at local farmers
              markets to becoming a community favorite, we've maintained our
              commitment to using only the finest ingredients.
            </p>
            <p>
              Thanks to our loyal customers, we've grown and expanded our
              offerings to include a wide range of pastries, breads, and custom
              cakes, each crafted with care and precision. We're proud to be a
              part of your celebrations, big and small.
            </p>
          </div>

          {/* Image on the Right */}
          <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 flex justify-center">
            {" "}
            {/* Centering the content */}
            <img
              src="https://source.unsplash.com/featured/?cake"
              alt="Baked Cake"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Section with FontAwesome Icons */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-6xl mx-auto flex justify-around items-center flex-wrap">
          {[
            {
              title: "Cupboard Essentials",
              description: "High-quality baking ingredients for your home.",
              icon: faSeedling,
            },
            {
              title: "Seasonal Pastries",
              description: "Delicious treats that celebrate the seasons.",
              icon: faSnowflake,
            },
            {
              title: "Event Catering",
              description: "Custom catering options for events of any size.",
              icon: faUtensils,
            },
            {
              title: "Baking Classes",
              description: "Learn the art of baking in our hands-on classes.",
              icon: faChalkboardTeacher,
            },
          ].map((service, index) => (
            <div key={index} className="text-center p-4 w-1/2 md:w-1/4">
              <div className="mb-4">
                <span className="block p-2 mx-auto mb-2">
                  <FontAwesomeIcon icon={service.icon} size="2x" />
                </span>
                <h3 className="font-bold">{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Some Statistical Facts</h2>
          <div className="flex justify-around">
            <div>
              <h3 className="text-2xl font-bold">{stats.popularity}</h3>
              <p>Popularity</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{stats.happyCustomers}</h3>
              <p>Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{stats.events}</h3>
              <p>Events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

      {
        /* Add Icons to Services Section*/
      }
