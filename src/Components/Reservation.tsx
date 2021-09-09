import React from "react";
import Header from "./Header";
import useForm from "./useForm";

export const Reservation: React.FC = (): JSX.Element => {
  const {
    data,
    count,
    errors,
    handleChange,
    handleSubmit,
    formIsValid,
    setPmOrAm,
    menuHidden,
    setMenuHidden,
    increment,
    decrement,
  } = useForm();

  return (
    <div className="text-center select-none mb-40">
      <Header
        addpadding={false}
        bgimg="reserve-bg"
        button={false}
        title="dine"
        h2="Reservations"
        text="We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you."
      ></Header>
      <main className="mx-6 select-none">
        <div className="lg:h-36 md:h-80 h-96 relative">
          <div className="-z-10 rounded-br-large -top-2 -left-96 absolute hidden lg:block bg-gray-200 w-full h-80"></div>
          <form className="xl:w-5/12 xl:right-32 lg:right-14 lg:-top-80 lg:w-6/12 lg:mx-0 md:mx-24 -top-24 mx absolute shadow-2xl py-4 px-7 bg-white">
            {formIsValid ? (
              <div className="text-center text-green-800 ">
                Thank you for the reservation! We will get back to you in email
                shorty!
              </div>
            ) : null}
            <input
              value={data.name}
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              placeholder="Name"
              name="name"
              className={`font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                errors.name
                  ? ` focus:border-red-500 border-red-200 placeholder-red-300`
                  : ` focus:border-gray-500 border-black focus:text-primary-black`
              }`}
            ></input>

            <div className="text-xs text-red-500 px-3 text-left">
              {errors.name}
            </div>
            <input
              value={data.email}
              onChange={(e) => {
                handleChange(e);
              }}
              name="email"
              type="email"
              placeholder="Email"
              className={`font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                errors.email
                  ? ` focus:border-red-500 border-red-200 placeholder-red-300`
                  : ` focus:border-gray-500 border-black focus:text-primary-black`
              }`}
            ></input>
            <div className="mb-4 text-xs text-red-500 px-3 text-left">
              {errors.email}
            </div>

            <div className="md:items-center md:flex-row flex flex-col mb-5 ">
              <div className="md:w-8/12">
                <p className="text-left">Pick a date</p>
                <div className="text-xs text-red-500 text-left">
                  {errors.date}
                </div>
              </div>
              <div className="flex">
                <input
                  type="number"
                  name="month"
                  onChange={handleChange}
                  placeholder="MM"
                  value={data.month}
                  className={`mr-3 font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                    errors.month
                      ? ` text-red-500 focus:border-red-500 border-red-200 placeholder-red-300`
                      : ` focus:border-black border-black focus:text-primary-black`
                  }`}
                ></input>
                <input
                  onChange={handleChange}
                  value={data.day}
                  name="day"
                  type="number"
                  placeholder="DD"
                  className={`mr-3 font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                    errors.day
                      ? ` text-red-500 focus:border-red-500 border-red-200 placeholder-red-300`
                      : ` focus:border-black border-black focus:text-primary-black`
                  }`}
                ></input>
                <input
                  onChange={handleChange}
                  value={data.year}
                  type="number"
                  name="year"
                  placeholder="YY"
                  className={`font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                    errors.year
                      ? ` text-red-500 focus:border-red-500 border-red-200 placeholder-red-300`
                      : ` focus:border-black border-black focus:text-primary-black`
                  }`}
                ></input>
              </div>
            </div>
            <div className="md:items-center md:flex-row flex flex-col  mb-6">
              <div className="md:w-8/12">
                <p className="text-left">Pick a time</p>
                <div className="text-xs text-red-500 text-left">
                  {errors.time}
                </div>
              </div>
              <div className="flex">
                <input
                  type="number"
                  name="hour"
                  onChange={handleChange}
                  placeholder="09"
                  value={data.hour}
                  className={`md:w-10/12 mr-3 font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                    errors.hour
                      ? ` text-red-500 focus:border-red-500 border-red-200 placeholder-red-300`
                      : ` focus:border-black border-black focus:text-primary-black`
                  }`}
                ></input>
                <input
                  onChange={handleChange}
                  value={data.minute}
                  name="minute"
                  type="number"
                  placeholder="00"
                  className={`mr-3 font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                    errors.minute
                      ? ` text-red-500 focus:border-red-500 border-red-200 placeholder-red-300`
                      : ` focus:border-black border-black focus:text-primary-black`
                  }`}
                ></input>
                <div
                  onChange={handleChange}
                  className="md:w-full relative flex justify-start items-center"
                >
                  <input
                    onChange={handleChange}
                    value={data.pmOrAm?.toUpperCase()}
                    onClick={() => {
                      setMenuHidden(!menuHidden);
                    }}
                    type="text"
                    name="pmOrAm"
                    placeholder="PM"
                    className={`font-spartan p-3 w-full focus:outline-none text-xl border-2 border-gray-300 border-t-0 border-l-0 border-r-0 ${
                      errors.pmOrAm
                        ? ` text-red-500 focus:border-red-500 border-red-200 placeholder-red-300`
                        : ` focus:border-black border-black focus:text-primary-black`
                    }`}
                  ></input>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    className={`-ml-4 mb-2 ${
                      !menuHidden ? `transform rotate-180` : ``
                    }`}
                    onClick={() => {
                      setMenuHidden(!menuHidden);
                    }}
                  >
                    <path
                      fill="none"
                      stroke="#9E7F66"
                      stroke-width="2"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                  <div
                    className={`w-full text-left absolute left-0 -bottom-16 text-lg font-spartan cursor-pointer border-2 shadow-2xl ${
                      menuHidden ? `hidden` : ``
                    }`}
                  >
                    <div className="flex justify-end items-center">
                      {data.pmOrAm === "PM" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="11"
                        >
                          <path
                            fill="none"
                            stroke="#9E7F66"
                            stroke-width="2"
                            d="M1 5.897l2.767 2.767L11.432 1"
                          />
                        </svg>
                      ) : null}
                      <div
                        className="bg-white z-10 pr-3 pl-1"
                        onClick={() => setPmOrAm("PM")}
                      >
                        PM
                      </div>
                    </div>

                    <div className="flex justify-end items-center">
                      {data.pmOrAm === "AM" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="11"
                        >
                          <path
                            fill="none"
                            stroke="#9E7F66"
                            stroke-width="2"
                            d="M1 5.897l2.767 2.767L11.432 1"
                          />
                        </svg>
                      ) : null}
                      <div
                        className="bg-white z-10 pr-3 pl-1"
                        onClick={() => setPmOrAm("AM")}
                      >
                        AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pb-4 items-center border-b-2 border-gray-300 mb-5">
              <svg
                className="w-7 h-7 cursor-pointer pt-3 pl-3"
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="3"
                onClick={decrement}
              >
                <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z" />
              </svg>
              <div className="font-bold text-xl select-none">
                {count} people
              </div>
              <svg
                className="w-7 h-7 cursor-pointer pt-2 pl-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                onClick={increment}
              >
                <path
                  fill="#9E7F66"
                  d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"
                />
              </svg>
            </div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="relative lg:mb-7 hover:text-primary-black hover:bg-white hover:border hover:border-black lg:mx-0 my-2 w-full py-4 px-5 bg-primary-black cursor-pointer text-white uppercase border text-base font-semibold tracking-widest"
            >
              make reservation
              <svg
                className="lg:block hidden -z-10 absolute -left-24 -bottom-20"
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="76"
              >
                <g fill="#9E7F66" fill-rule="evenodd">
                  <path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" />
                </g>
              </svg>
            </button>
          </form>
          )
        </div>
      </main>
    </div>
  );
};
