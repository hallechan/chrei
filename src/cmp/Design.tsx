const Design = () => {
  return (
    <div className="flex-col mt-24 justify-start ml-8 lg:ml-72 animate-fade-down animate-duration-5000 animate-normal">
      <div>
        <h1 className="font-helvetica text-black tracking-tightest text-7xl">
          design{" "}
          <a
            className="font-eb text-pink selection:text-lightpink 
            tracking-tightest italic font-bold text-8xl"
          >
            design
          </a>{" "}
          design
        </h1>
        <p className="max-w-fit font-helvetica text-black tracking-tighterer text-2xl my-4 mx-1 mr-12">
          Included in my archive is my graphic and visual design work. Have a
          glance.
        </p>
        <p className="max-w-fit mt-2.5 font-helvetica text-grey tracking-tighterer text-lg">
          Pssst. I'm also running my design project,{" "}
          <a
            className="underline hover:text-pink"
            target="_blank"
            href="https://www.instagram.com/kurokuristudio/"
          >
            @kurokuristudio,
          </a>{" "}
          on Instagram. Check it out.
        </p>
      </div>
      <div className="my-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 max-w-fit justify-start">
          {/* 1 */}
          <div>
            <a target="_blank" href="/images/gallery/cxciii.png">
              <img
                className="h-80 w-80 md:h-96 md:w-96 my-8 mr-8 hover:animate-pulse"
                src="/images/gallery/cxciii.png"
              />
            </a>
          </div>
          {/* 2 */}
          <div>
            <a target="_blank" href="/images/gallery/theelixir.png">
              <img
                className="h-80 w-80 md:h-96 md:w-96 my-8 mr-8 hover:animate-pulse"
                src="/images/gallery/theelixir.png"
                alt=""
              />
            </a>
          </div>
          {/* 3 */}
          <div>
            <a target="_blank" href="/images/gallery/classandintegrity.png">
              <img
                className="h-80 w-80 md:h-96 md:w-96 my-8 mr-8 hover:animate-pulse"
                src="/images/gallery/classandintegrity.png"
                alt=""
              />
            </a>
          </div>
          {/* 4 */}
          <div>
            <a target="_blank" href="/images/gallery/renee.png">
              <img
                className="h-80 w-80 md:h-96 md:w-96 my-8 mr-8 hover:animate-pulse"
                src="/images/gallery/renee.png"
                alt=""
              />
            </a>
          </div>
          {/* 5 */}
          <div>
            <a target="_blank" href="/images/gallery/atvgirl.png">
              <img
                className="h-80 w-80 md:h-96 md:w-96 my-8 mr-8 hover:animate-pulse"
                src="/images/gallery/atvgirl.png"
                alt=""
              />
            </a>
          </div>
          {/* 6 */}
          <div>
            <a target="_blank" href="/images/gallery/cynic.png">
              <img
                className="h-80 w-80 md:h-96 md:w-96 my-8 mr-8 hover:animate-pulse"
                src="/images/gallery/cynic.png"
                alt=""
              />
            </a>
          </div>
          {/* END */}
        </div>
      </div>
    </div>
  );
};

export default Design;
