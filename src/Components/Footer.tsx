import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="xl:px-40 xl:pr-72 xl:py-6 lg:px-32 lg:pr-40 lg:pt-0 lg:items-center md:pt-14 md:text-left md:flex-row flex flex-col text-center bg-primary-black text-white select-none">
      <h2 className="lg:text-left lg:m-0 lg:p-0 md:pl-8 md:m-0 md:w-1/3 mt-20 mb-6">
        <a href="/">dine</a>
      </h2>
      <div className="lg:py-10 lg:justify-between lg:items-center lg:flex-row md:w-2/3 flex flex-col uppercase">
        <div className="lg:mb-0 mb-6">
          <p className="lg:text-sm">marthwaite, sedbergh</p>
          <p className="lg:text-sm">cumbria</p>
          <a href="tel:+00 44 123 4567">
            <p className="lg:text-sm">+00 44 123 4567</p>
          </a>
        </div>
        <div className="lg:mb-0 mb-16">
          <p className="lg:text-sm">open times</p>
          <p className="lg:text-sm">mon - fri: 09:00 am - 10:00 pm</p>
          <p className="lg:text-sm">sat - sun: 09:00 am - 11.30 pm</p>
        </div>
      </div>
    </footer>
  );
};
