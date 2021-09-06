import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Secondary from "./Components/Secondary";
import { Occasion } from "./Components/Occasion";
import { Footer } from "./Components/Footer";
import { Reservation } from "./Components/Reservation";

/* For tailwind class scraping

        'hero-bg-mobile',
        'ready-bg-mobile',
        'hero-bg-tablet',
        'ready-bg-tablet',
        'hero-bg-desktop',
        'ready-bg-desktop',
        'reserve-bg-mobile',
        'reserve-bg-mobile@2x',
        'reserve-bg-tablet',
        'reserve-bg-desktop',
*/

function App() {
  const [isBooking, setIsBooking] = useState(false);

  const book = () => {
    setIsBooking(true);
  };
  return (
    <>
      {!isBooking ? (
        <div className="App font-spartan text-lg leading-8 select-none">
          <Header
            addpadding={true}
            bgimg="hero-bg"
            button={true}
            book={book}
            text="Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse."
            title="dine"
            h2="Exquisite dining since 1989"
          ></Header>
          <main>
            <Main></Main>
            <Secondary></Secondary>
            <Occasion book={book}></Occasion>
            <div className="xl:px-40 lg:px-32 lg:text-left lg:justify-between lg:items-center lg:py-20 lg:p-0 lg:flex-row lg:bg-ready-bg-desktop md:bg-ready-bg-tablet pt-20 bg-center bg-cover bg-ready-bg-mobile text-center flex flex-col px-6">
              <h2 className="text-white">Ready to make a reservation?</h2>
              <div className="flex justify-center items-center">
                <button
                  onClick={book}
                  className="hover:bg-white hover:text-primary-black lg:flex-shrink-0 lg:m-0 md:mx-0 mb-20 mt-7 mx-8 py-4 px-12 bg-transparent cursor-pointer text-white uppercase border text-base font-semibold tracking-widest"
                >
                  book a table
                </button>
              </div>
            </div>
          </main>
          <Footer></Footer>
        </div>
      ) : (
        <>
          <Reservation></Reservation>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
