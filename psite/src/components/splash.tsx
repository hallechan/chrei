const Splash = () => {
  return (
    <div>
      <div
        className="m-16 mb-0 flex justify-center 
        animate-fade-up animate-delay-1000"
      >
        <img
          className="h-24 hover:animate-jump animate-duration-[2500ms]"
          src="/assets/logos/squaredheart.svg"
        />
      </div>

      <div className="flex">
        <img
          className="ml-64 h-32 animate-fade-right animate-delay-[1500ms]"
          src="/assets/images/signature.png"
        />
        <a className="mt-10 ml-2 leading-[60px] font-bold text-7xl flex animate-fade-left animate-delay-[1500ms]">
          <h1 className="text-[var(--offwhite)]">a&nbsp;</h1>
          <h1 className="text-[var(--pink)] selection:text-[var(--lightpink)]">
            product <br /> designer.
          </h1>
        </a>
        <img
          className="h-48 animate-fade-left animate-delay-[1500ms]"
          src="/assets/images/me.png"
        />
      </div>

      <div className="flex justify-center m-48 ml-96 w-min">
        <p
          className="text-[var(--offwhite)] text-2xl text-center font-reg
          animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-[var(--offwhite)]"
        >
          1A Computer Science at the&nbsp;
          <a
            href="https://uwaterloo.ca/math/future-undergraduates/programs/computer-science-0"
            target="_blank"
            className="text-[var(--lightpink)] text-2xl text-center font-reg
            hover:underline hover:cursor-pointer hover:animate-jump"
          >
            University of
            Waterloo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </p>
      </div>

      <div className="mt-64 mb-12 flex justify-center">
        <h1 className="font-cursive text-6xl text-[var(--pink)]">
          joy, design!
        </h1>
      </div>
      <div className="mb-8 flex justify-center">
        <p className="text-[var(--offwhite)] text-2xl text-center font-reg">
          I revel in the intersection between creative <br /> design and
          computational graphics. I aim to <br /> create a{" "}
          <a className="text-[var(--pink)]"> glossy, human-centric</a>
          &nbsp;user experience.
        </p>
      </div>
      <div className="flex m-16 justify-center">
        <button
          className="border-solid border-2 border-[var(--offwhite)] rounded-full
        hover:animate-jump hover:bg-[var(--pink)] hover:border-[var(--pink)] hover:animate-ease-in-out"
        >
          <h1 className="m-4 ml-8 mr-8 text-[var(--offwhite)] text-center text-2xl font-reg">
            <a href="/about">about me</a>
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Splash;
