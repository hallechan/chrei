import Projects from "./Projects.tsx";

const Home = () => {
  return (
    <div className="animate-fade-down animate-duration-5000 animate-normal">
      <div className="flex mt-24 justify-start">
        <div className="ml-72">
          <h1>
            <a className="font-helvetica text-black tracking-tightest text-7xl">
              hi, i'm&nbsp;
            </a>
            <a
              className="font-eb text-pink selection:text-lightpink 
            tracking-tightest italic font-bold text-9xl"
            >
              hailey.
            </a>
            <br />
            <a className="font-helvetica text-black tracking-tightest text-7xl">
              i'm a <a className="text-grey">ux/ui</a> <br /> designer.
            </a>
          </h1>
          <p className="font-helvetica text-black tracking-tightest text-2xl my-24">
            and University of Waterloo{" "}
            <a
              href="https://drive.google.com/file/d/1dfrym8cHHgy5DCrcjGoVDMA7tpSnyu1J/view?usp=sharing"
              target="_blank"
              className="text-pink selection:text-lightpink underline"
            >
              CS 1B ↪
            </a>
          </p>
          <p className="max-w-80 font-helvetica text-black tracking-tighterer text-2xl my-24">
            I walk the tightrope between design and computer science. I enjoy
            brazen colours and things that glimmer.
          </p>
        </div>
        <div className="ml-28 my-12">
          <img className="h-80" src="/images/homehailey.png"></img>
        </div>
      </div>
      <div className="ml-72">
        <h1
          className="font-helvetica text-black tracking-tightest text-4xl 
        animate-bounce animate-duration-[2000ms] animate-ease-out animate-alternate"
        >
          ↓
        </h1>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
