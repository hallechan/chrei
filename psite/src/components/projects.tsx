const Projects = () => {
  return (
    <div>
      <ul className="m-32 w-max">
        <li>
          <div className="flex">
            <img className="h-[512px] " src="src/assets/images/roro.png" />
            <div className="m-12 w-min">
              <h1
                className="h-12 animate-typing animate-once
              overflow-hidden whitespace-nowrap border-r-2 border-r-[var(--offwhite)] 
            text-[var(--offwhite)] text-6xl font-bold uppercase"
              >
                project roro
              </h1>
              <p className="mt-8 text-[var(--offwhite)] text-2xl font-reg">
                made for DECA 2023 <br />
                <br /> <a className="font-bold">recognition</a> <br />{" "}
                provincial finalist <br />
                DECA ICDC qualifier <br />
                60/60 report <br />
                27th
              </p>
              <a
                href="https://drive.google.com/drive/folders/1leHz_uTi_UPvjIE-QF9zMWURhO19FaEL?usp=sharing"
                target="_blank"
              >
                <button
                  className="my-8 border-solid border-2 border-[var(--offwhite)] rounded-full
        hover:animate-jump hover:bg-[var(--pink)] hover:border-[var(--pink)] hover:animate-ease-in-out"
                >
                  <h1 className="m-4 ml-8 mr-8 text-[var(--offwhite)] text-center text-2xl font-reg">
                    project details
                  </h1>
                </button>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-16 mb-4 flex justify-center">
        <h1 className="font-cursive text-6xl text-[var(--pink)]">
          more soon...
        </h1>
      </div>
      <div>
        <p className="text-[var(--offwhite)] text-xl text-center font-reg">
          In the meantime, visit <br /> my design portfolio.
        </p>
      </div>
      <div className="flex justify-center">
        <a
          href="https://drive.google.com/drive/folders/1Cy6cMmYWegYIylClE9BmhEx1LV5w44BN?usp=sharing"
          target="_blank"
        >
          <button
            className="my-8 border-solid border-2 border-[var(--offwhite)] rounded-full
        hover:animate-jump hover:bg-[var(--pink)] hover:border-[var(--pink)] hover:animate-ease-in-out"
          >
            <h1 className="m-4 ml-8 mr-8 text-[var(--offwhite)] text-center text-2xl font-reg">
              portfolio
            </h1>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
