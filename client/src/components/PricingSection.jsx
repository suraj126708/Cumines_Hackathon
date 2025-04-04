const PricingSection = () => {
  return (
    <section className="mt-10 py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
          <h2
            id="pricing"
            className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
          >
            Affordable Travel Packages
          </h2>
          <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
            Explore the world with our exclusive travel deals.
          </p>
        </div>

        <div
          id="pricing"
          className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 lg:grid-cols-3"
        >
          {/* Package 1 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Basic
            </h3>
            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $199
              </p>
              <p
                className="box-border m-0 border-solid"
                style={{ borderImage: "initial" }}
              >
                / trip
              </p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                2 Nights Stay
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Breakfast Included
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Guided City Tour
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Book Now
            </a>
          </div>

          {/* Package 2 */}
          <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Premium
            </h3>
            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $499
              </p>
              <p
                className="box-border m-0 border-solid"
                style={{ borderImage: "initial" }}
              >
                / trip
              </p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                5 Nights Stay
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Adventure Activities
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All Meals Included
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Airport Transfers
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Book Now
            </a>
          </div>

          {/* Package 3 */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Unlimited
            </h3>
            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $999
              </p>
              <p
                className="box-border m-0 border-solid"
                style={{ borderImage: "initial" }}
              >
                / trip
              </p>
            </div>
            <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                7 Nights Stay
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Private Tours
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                All-Inclusive Meals
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Spa Access
              </li>
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Airport Transfers
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
