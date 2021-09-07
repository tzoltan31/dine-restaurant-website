import React from "react";
import PatternDivide from "./PatternDivide";
import MenuHighlight from "./MenuHighlight";

const Secondary: React.FC = () => {
  return (
    <section className="xl:px-40 lg:pt-48 lg:pl-32 lg:flex-row lg:-mt-20 md:pb-14 md:px-24 md:pt-20 bg-primary-black text-white flex flex-col px-6 text-center pt-12">
      {/* heading + p */}
      <div className="lg:w-1/2 lg:text-left mb-14">
        <PatternDivide></PatternDivide>
        <h2 className="lg:mx-0 md:mx-24 pt-4 mb-5">
          A few highlights from our menu
        </h2>
        <p className="lg:mx-0 md:mx-14 md:leading-normal leading-6">
          We cater for all dietary requirements, but here's a glimpse at some of
          our diner's favourites. Our menu is revamped every season.
        </p>
      </div>
      {/* pics + title/desc container */}
      <section className="lg:pt-16 lg:ml-20 lg:w-2/3 flex flex-col">
        <MenuHighlight
          title="Seared Salmon Fillet"
          alt="salmon"
          pics="/images/homepage/salmon-mobile.jpg"
          desc="Our locally sourced salmon served with a refreshing buckwheat summer salad."
        ></MenuHighlight>
        <div className="bg-gray-600 h-01 mb-5"></div>
        <MenuHighlight
          title="Rosemary Filet Mignon"
          alt="mignon"
          pics="/images/homepage/beef-mobile.jpg"
          desc="Our prime beef served to your taste with a delicious choice of seasonal sides."
        ></MenuHighlight>
        <div className="bg-gray-600 h-01 mb-5"></div>
        <MenuHighlight
          title="Summer Fruit Chocolate Mousse"
          alt="chocolate"
          pics="/images/homepage/chocolate-mobile.jpg"
          desc="Creamy mousse combined with summer fruits and dark chocolate shavings."
        ></MenuHighlight>
      </section>
    </section>
  );
};

export default Secondary;
