import React from "react";

interface Props {
  pics: string;
  title: string;
  desc: string;
  alt: string;
}

const MenuHighlight: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="md:flex-shrink-0 md:relative md:flex-row flex flex-col mb-6">
      {/* brown line */}
      <div className="hidden md:block absolute xl:left-16 left-9 top-4 bg-primary-beaver h-01 w-1/4"></div>
      <img
        src={props.pics}
        alt={props.alt}
        className="lg:flex-shrink-0 md:z-10 xl:ml-10 lg:w-1/4 md:w-1/4 md:mr-8 md:mb-0 mb-7"
      />
      {/* title + desc container*/}
      <div className="flex flex-col xl:ml-6 lg:w-full md:items-start items-center">
        <h3 className="mb-3 lg:text-lg text-base md:text-left">
          {props.title}
        </h3>
        <p className="md:text-left md:text-base w-5/6">{props.desc}</p>
      </div>
    </div>
  );
};

export default MenuHighlight;
