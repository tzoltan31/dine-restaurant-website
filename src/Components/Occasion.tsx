import React from "react";
import { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

interface Props {
  book: () => void;
}

export const Occasion: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(0);
  const { width } = useWindowDimensions();

  let pathprefix = "";
  let pathsuffix = "";
  let imgclasses = "";

  if (width < 768) {
    imgclasses = "md:hidden mt-20 shadow-2xl mb-14";
    pathsuffix = "mobile";
  } else if (width < 1024) {
    imgclasses = "lg:hidden md:mx-24 md:block hidden mt-20 shadow-2xl mb-14";
    pathsuffix = "tablet";
  } else {
    pathsuffix = "desktop";
    imgclasses =
      "xl:p-40 xl:pr-20 lg:z-10 lg:shadow-none lg:border-none lg:m-0 lg:p-32 lg:w-1/2 lg:pr-16 md:mx-24 lg:block hidden mt-20 shadow-2xl mb-14";
  }

  if (selected === 0) {
    pathprefix = "family-gathering-";
  } else if (selected === 1) {
    pathprefix = "special-events-";
  } else {
    pathprefix = "social-events-";
  }
  return (
    <section className="lg:items-start lg:text-left lg:flex-row md:relative md:mx-0 flex flex-col mx-6 text-center">
      <img
        src={`/images/homepage/${pathprefix + pathsuffix}.jpg`}
        alt={pathprefix}
        className={imgclasses}
      />
      {/* gray bg element */}
      <div className="lg:-left-40 md:block hidden left-0 top-0 absolute -z-10 bg-gray-200 w-1/2 rounded-tr-large h-72"></div>
      {/* lines svg */}
      <svg
        className="xl:top-32 xl:left-28 lg:z-20 lg:top-24 lg:left-20 md:block top-10 left-8 hidden absolute"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="76"
      >
        <g fill="#9E7F66" fill-rule="evenodd">
          <path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" />
        </g>
      </svg>
      <div className="xl:pl-20 xl:p-40 lg:pb-5 lg:p-32 lg:pl-16 lg:flex-col-reverse lg:w-1/2 flex flex-col">
        <div className="lg:space-y-3 lg:flex-col md:space-y-0 mb-8 md:flex-row flex flex-col text-sm text-gray-500 space-y-4">
          <button
            className={`lg:text-left lg:w-full md:w-1/3 relative uppercase tracking-wider cursor-pointer ${
              selected === 0 ? `font-semibold text-secondary-gray` : ``
            }`}
            onClick={() => {
              setSelected(0);
            }}
          >
            Family Gathering
            {selected === 0 ? (
              <div className="lg:w-40 lg:-left-24 lg:top-2 mt-01 bg-primary-beaver h-01 w-12 mx-auto absolute top-full left-1/2 -translate-x-1/2 transform"></div>
            ) : null}
          </button>
          <button
            className={`lg:text-left lg:w-full md:w-1/3 relative uppercase tracking-wider cursor-pointer ${
              selected === 1 ? `font-semibold text-secondary-gray` : ``
            }`}
            onClick={() => {
              setSelected(1);
            }}
          >
            Special Events
            {selected === 1 ? (
              <div className="lg:w-40 lg:-left-24 lg:top-2 mt-01 bg-primary-beaver h-01 w-12 mx-auto absolute top-full left-1/2 -translate-x-1/2 transform"></div>
            ) : null}
          </button>
          <button
            className={`lg:text-left lg:w-full md:w-1/3 relative uppercase tracking-wider cursor-pointer ${
              selected === 2 ? `font-semibold text-secondary-gray` : ``
            }`}
            onClick={() => {
              setSelected(2);
            }}
          >
            Social Events
            {selected === 2 ? (
              <div className="lg:w-40 lg:-left-24 lg:top-2 mt-01 bg-primary-beaver h-01 w-12 mx-auto absolute top-full left-1/2 -translate-x-1/2 transform"></div>
            ) : null}
          </button>
        </div>
        <div>
          {selected === 0 ? (
            <div className="lg:mx-0 md:mx-36 md:mt-4">
              <h2 className="mb-6">Family Gathering</h2>
              <p>
                We love catering for entire families. So please bring everyone
                along for a special meal with your loved ones. We'll provide a
                memorable experience<br className="hidden desktop:block"></br>{" "}
                for all.
              </p>
            </div>
          ) : selected === 1 ? (
            <div className="lg:mx-0 md:mx-36 md:mt-4">
              <h2 className="mb-6">Special events</h2>
              <p>
                Whether it's a romantic dinner or a special date you're
                celebrating with others we'll look after you. We'll be sure to
                mark your special date with an unforgettable meal.
              </p>
            </div>
          ) : (
            <div className="lg:mx-0 md:mx-36 md:mt-4">
              <h2 className="mb-6">Social Events</h2>
              <p>
                Are you looking to have a larger social event? No problem! We're
                more than happy to cater for big parties. We'll work with you to
                make your event a hit with everyone.
              </p>
            </div>
          )}
          <button
            onClick={props.book}
            className="hover:text-primary-black hover:bg-white hover:border hover:border-black lg:mb-14 lg:mx-0 md:mx-64 mb-28 mt-7 bg-primary-black cursor-pointer text-white mx-8 uppercase border text-base font-semibold tracking-widest py-4 px-12"
          >
            book a table
          </button>
        </div>
      </div>
    </section>
  );
};
