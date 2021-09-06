import React from "react";
import PatternDivide from "./PatternDivide";

const Main: React.FC = () => {
  return (
    <section className="xl:px-40 lg:px-32 md:px-24 relative px-4 h-full -mt-12 flex flex-col text-center">
      <div className="lg:mb-14 lg:relative lg:flex-row lg:flex">
        <div className="relative lg:w-1/2 desktop:w-1/2">
          <img
            className="md:hidden my-0 mx-auto mb-6 shadow-2xl"
            src="/images/homepage/enjoyable-place-mobile.jpg"
            alt="enjoyable-place"
          />
          <img
            className="lg:hidden md:block w-full hidden my-0 mx-auto mb-6 shadow-2xl"
            src="/images/homepage/enjoyable-place-tablet.jpg"
            alt="enjoyable-place"
          />
          <img
            className="desktop:w-full lg:block hidden my-0 mb-6 shadow-2xl"
            src="/images/homepage/enjoyable-place-desktop.jpg"
            alt="enjoyable-place"
          />
          {/* top gray bg element for md*/}
          <div className="lg:hidden md:block hidden -left-96 -bottom-24 absolute -z-10 bg-gray-200 w-full h-64"></div>
        </div>
        {/* top gray bg el for lg */}
        <div className="lg:block hidden rounded-tr-large -left-96 bottom-24 absolute -z-10 bg-gray-200 w-full h-44"></div>
        {/* bot gray bg element for md*/}
        <div className="lg:hidden md:block hidden right-0 bottom-0 absolute -z-10 bg-gray-200 w-1/2 h-52 rounded-tl-large"></div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:pl-16 lg:w-1/2 mb-16">
          <div className="lg:pl-6">
            <PatternDivide></PatternDivide>
          </div>
          <h2 className="lg:pl-6 lg:px-0 lg:text-left md:px-32 text-center px-4 pb-5">
            Enjoyable place <br className="hidden lg:block"></br>for all the
            family
          </h2>
          <p className="lg:pl-6 lg:px-0 lg:text-left md:px-16 px-4 leading-6">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className="lg:relative lg:flex lg:flex-row-reverse">
        {/* bot gray bg element for lg*/}
        <div className="lg:block hidden -right-32 bottom-20 absolute -z-10 bg-gray-200 w-4/5 h-52 rounded-tl-large"></div>
        <div className="lg:w-1/2 flex items-center justify-center">
          {/* lines svg el */}
          <svg
            className="lg:bottom-80 lg:-right-24 md:block hidden absolute right-10 bottom-72"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="76"
          >
            <g fill="#9E7F66" fill-rule="evenodd">
              <path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" />
            </g>
          </svg>
          <img
            className="md:hidden my-0 mb-6 shadow-2xl"
            src="/images/homepage/locally-sourced-mobile.jpg"
            alt="locally-sourced"
          />
          <img
            className="lg:hidden md:block hidden my-0 w-full mb-6 shadow-2xl"
            src="/images/homepage/locally-sourced-tablet.jpg"
            alt="locally-sourced"
          />
          <img
            className="lg:block hidden my-0 w-full mb-6 shadow-2xl"
            src="/images/homepage/locally-sourced-desktop.jpg"
            alt="locally-sourced"
          />
        </div>
        <div className="lg:w-1/2 lg:pr-16 lg:flex lg:flex-col lg:justify-center mb-16">
          <PatternDivide></PatternDivide>
          <h2 className="lg:px-0 lg:text-left text-center px-4 pb-5">
            The most locally <br className="hidden lg:block"></br>sourced food
          </h2>
          <p className="lg:pr-12 lg:px-0 lg:text-left px-4 leading-6">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you're eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
