import React from "react";

interface Props {
  book?: () => void;
  title: string;
  h2: string;
  text: string;
  button: boolean;
  bgimg: string;
  addpadding: boolean;
}

const Header: React.FC<Props> = (props) => {
  const buttEl = React.useRef<HTMLButtonElement | null>(null);

  const scrollToBottom = () => {
    if (null !== buttEl.current) {
      buttEl.current.scrollIntoView();
    }
  };
  return (
    <header
      className={`xl:px-40 lg:px-32 lg:pt-14 lg:text-left md:pb-40 md:p-24 p-7 pb-40 bg-primary-black bg-top bg-no-repeat text-center ${`lg:bg-${props.bgimg}-desktop md:bg-${props.bgimg}-tablet bg-${props.bgimg}-mobile bg-cover`} ${
        props.addpadding ? `lg:h-bigpic` : `lg:h-full md:pt-12`
      }`}
    >
      <div
        className={`2xl:w-1/3 xl:w-1/2 text-white space-y-7 ${
          props.addpadding ? `lg:w-3/5` : `lg:w-2/5`
        }`}
      >
        <h2
          className={`xl:mb-40 md:text-left lg:pt-0 lg:mb-28 md:text-5xl text-4xl ${
            props.addpadding
              ? `md:pt-72 pt-48 md:text-center lg:text-left`
              : ` md:-ml-14 lg:ml-0`
          }`}
        >
          <a href="/">{props.title}</a>
        </h2>
        <h1 className={`lg:leading-none md:leading-snug `}>{props.h2}</h1>
        <p className={props.addpadding ? `` : ` lg:w-4/5`}>{props.text}</p>
        {props.addpadding ? (
          <button
            onClick={props.book}
            className="hover:bg-white hover:text-primary-black uppercase border text-base cursor-pointer font-semibold tracking-widest py-3 px-12"
          >
            book a table
          </button>
        ) : (
          <button
            ref={buttEl}
            onClick={scrollToBottom}
            className="md:hidden hover:bg-white marker hover:text-primary-black uppercase border text-base cursor-pointer font-semibold tracking-widest py-3 px-12"
          >
            reserve a place
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
