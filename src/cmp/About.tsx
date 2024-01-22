const About = () => {
  return (
    <div className="animate-fade-down animate-duration-5000 animate-normal">
      <div className="flex-shrink lg:flex mt-24 justify-start">
        <div className="ml-8 lg:ml-72">
          <p className="max-w-96 font-helvetica text-black tracking-tighterer text-2xl">
            I study computer science at the{" "}
            <a className="text-pink">University of Waterloo</a>, specializing in{" "}
            <a className="text-pink">Human-Computer Interaction</a>. I also like
            to make things easy to use and pretty to look at. <br /> <br />{" "}
            Aside from design, I like to write fictional stories, listen to
            Ethel Cain, and reunite Koroks with their friends.
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1rwXA1LAywLZ1N7fllVKjgGmuKcz3nOqG/view?usp=sharing"
          >
            <p className="max-w-96 mt-2.5 underline font-helvetica text-grey tracking-tighterer text-lg">
              my business card
            </p>
          </a>
        </div>
        <div className="ml-8 my-16 lg:my-0 lg:ml-20 xl:ml-44">
          <img className="h-80" src="/images/abouthailey.png"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
