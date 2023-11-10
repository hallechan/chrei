const About = () => {
  return (
    <div>
      <div className="mt-32 mb-12 flex justify-center">
        <h1
          className="font-cursive text-6xl text-[var(--pink)]
        animate-fade-up animate-delay-1000"
        >
          hi, i'm hailey.
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          className="h-64 animate-fade-up animate-delay-1000"
          src="/assets/images/me 2.png"
        ></img>
      </div>
      <div className="mt-8 mb-8 flex justify-center">
        <p className="text-[var(--offwhite)] w-2/5 text-2xl text-center font-reg break-normal">
          ꨄ I’m trekking through my undergraduate degree in{" "}
          <a className="text-[var(--pink)]">
            {" "}
            Computer Science at the University of Waterloo. <br />
          </a>
          <br /> ❤ I walk the tightrope between creativity and technological
          principles to fortify the spirit of the user in charismatic,
          compassionate design. <br />
          <br /> ❣ Aside from playing with colours and blocks on a computer, I
          like writing fiction novels, half-marathons, and{" "}
          <a className="font-italic">Jujutsu Kaisen.</a>
        </p>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-[var(--offwhite)] border-0 rounded md:my-10" />
      <div className="mt-24 mb-32 flex justify-center">
        <h1 className="font-cursive text-6xl text-[var(--pink)]">
          principless
        </h1>
      </div>
      <div className="m-24">
        <ul
          className="text-center flex justify-center gap-x-32 
      text-2xl text-[var(--offwhite)] font-bold"
        >
          <li className="text-[var(--pink)] grid justify-items-center">
            <img className="h-8 m-4" src="/assets/logos/shapes/heart.svg" />
            heart
            <p className="m-2 text-xl text-[var(--offwhite)] font-reg">
              At the nucleus of design <br /> is{" "}
              <a className="font-bold text-[var(--pink)]">compassion</a> for the{" "}
              <br /> human. The user belongs <br /> in the spotlight.
            </p>
          </li>
          <li className="text-[var(--lightpink)] grid justify-items-center">
            <img className="h-8 m-4" src="/assets/logos/shapes/diamond.svg" />
            mind
            <p className="m-2 text-xl text-[var(--offwhite)] font-reg">
              Design is{" "}
              <a className="font-bold text-[var(--lightpink)]">shrewd</a>. Each{" "}
              <br /> decision comes with a <br /> concrete purpose. Down to{" "}
              <br /> the hex codes.
            </p>
          </li>
          <li className="text-[var(--pink)] grid justify-items-center">
            <img className="h-8 m-4" src="/assets/logos/shapes/star.svg" />
            soul
            <p className="m-2 text-xl text-[var(--offwhite)] font-reg">
              I advocate for design <br /> with{" "}
              <a className="font-bold text-[var(--pink)]">character.</a> <br />{" "}
              Design is a solution
              <br /> and a story.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
