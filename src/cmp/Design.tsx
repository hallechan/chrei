const Design = () => {
  return (
    <div className="flex-col mt-24 justify-start ml-72 animate-fade-down animate-duration-5000 animate-normal">
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
        <p className="font-helvetica text-black tracking-tighterer text-2xl my-4 mx-1">
          Included in my archive is my graphic and visual design work. Have a
          glance.
        </p>
      </div>
      <div className="my-12">
        <div className="grid grid-cols-2 gap-0 max-w-fit justify-start">
          {/* 1 */}
          <div>
            <a target="_blank" href="/images/gallery/cxciii.png">
              <img
                className="h-96 w-96 my-8 ml-0 hover:animate-pulse"
                src="/images/gallery/cxciii.png"
              />
            </a>
          </div>
          {/* 2 */}
          <div>
            <a target="_blank" href="/images/gallery/theelixir.png">
              <img
                className="h-96 w-96 my-8 ml-8 hover:animate-pulse"
                src="/images/gallery/theelixir.png"
                alt=""
              />
            </a>
          </div>
          {/* 3 */}
          <div>
            <a target="_blank" href="/images/gallery/classandintegrity.png">
              <img
                className="h-96 w-96 my-8 ml-0 hover:animate-pulse"
                src="/images/gallery/classandintegrity.png"
                alt=""
              />
            </a>
          </div>
          {/* 4 */}
          <div>
            <a target="_blank" href="/images/gallery/renee.png">
              <img
                className="h-96 w-96 my-8 ml-8 hover:animate-pulse"
                src="/images/gallery/renee.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
