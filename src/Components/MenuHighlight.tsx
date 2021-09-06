import React from "react";

interface Props {
  pics: string;
  title: string;
  desc: string;
  alt: string;
}

const MenuHighlight: React.FC<Props> = (props) => {
  return (
    <>
      <li className="md:relative md:flex-row flex flex-col mb-6">
        {/* brown line */}
        <div className="hidden md:block absolute top-4 bg-primary-beaver h-01 w-1/4"></div>
        <img
          src={props.pics}
          alt={props.alt}
          className="lg:flex-shrink-0 md:z-10 md:w-1/5 md:mr-12 md:mb-0 mb-7"
        />
        {/* title + desc container*/}
        <div className="flex flex-col md:items-start items-center">
          <h3 className="mb-3 text-base">{props.title}</h3>
          <p className="md:text-left md:text-base w-5/6">{props.desc}</p>
        </div>
      </li>
    </>
  );
};

export default MenuHighlight;
