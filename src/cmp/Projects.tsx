const Projects = () => {
  return (
    <div>
      <ul>
        {/* CLOAK */}
        <li className="my-24">
          <div className="ml-72 flex">
            <img className="h-80" src="/images/cloaksquare.png"></img>
            <div className="max-w-80 max-h-80 mx-4">
              <p className=" font-helvetica text-lightgrey tracking-tighterer text-2xl">
                UI project
              </p>
              <p className="font-eb font-bold italic text-[#EEBAC3] tracking-tighterer text-6xl mt-16">
                cloak
              </p>
              <p className=" font-helvetica text-black tracking-tighterer text-2xl">
                virtual closet
              </p>
              <a>
                <p
                  className=" font-helvetica underline text-black 
                tracking-tighterer text-2xl mt-24"
                >
                  coming soon
                </p>
              </a>
            </div>
          </div>
        </li>
        {/* CATTERFILLER */}
        <li className="my-24">
          <div className="ml-72 flex">
            <img className="h-80" src="/images/catterfillersquare.png"></img>
            <div className="max-w-80 max-h-80 mx-4">
              <p className=" font-helvetica text-lightgrey tracking-tighterer text-2xl">
                DeltaHacks 10
              </p>
              <p className="font-eb font-bold italic text-teal tracking-tighterer text-6xl mt-16">
                catterfiller
              </p>
              <p className=" font-helvetica text-black tracking-tighterer text-2xl">
                fill your prescriptions
              </p>
              <a
                target="_blank"
                href="https://devpost.com/software/catterfiller"
              >
                <p
                  className=" font-helvetica underline text-black hover:cursor-pointer hover:text-grey 
                tracking-tighterer text-2xl mt-24"
                >
                  details
                </p>
              </a>
            </div>
          </div>
        </li>
        {/* CATTERFILLER */}
        <li className="my-24">
          <div className="ml-72 flex">
            <img className="h-80" src="/images/desktopribbitsquare.png"></img>
            <div className="max-w-80 max-h-80 mx-4">
              <p className=" font-helvetica text-lightgrey tracking-tighterer text-2xl">
                YRHacks 2023 Best Game
              </p>
              <p className="font-eb font-bold italic text-[#8BA16F] tracking-tighterer text-6xl mt-16">
                desktop ribbit
              </p>
              <p className=" font-helvetica text-black tracking-tighterer text-2xl">
                find the frog
              </p>
              <a
                target="_blank"
                href="https://devpost.com/software/desktop-ribbit"
              >
                <p
                  className=" font-helvetica underline text-black hover:cursor-pointer hover:text-grey 
                tracking-tighterer text-2xl mt-24"
                >
                  details
                </p>
              </a>
            </div>
          </div>
        </li>
        {/* END */}
      </ul>
    </div>
  );
};

export default Projects;
