const Menu = () => {
  return (
    <div>
      <a>
        <img
          className="m-6 h-12 hover:animate-wiggle"
          src="/assets/logos/squaredheart.svg"
        />
      </a>
      <ul
        className="flex justify-center gap-x-24 
      text-lg text-[var(--offwhite)] font-reg
      animate-fade-up"
      >
        <a href="/">
          <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
            home
          </li>
        </a>
        <a href="/about">
          <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
            about
          </li>
        </a>
        <a href="/projects">
          <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
            projects
          </li>
        </a>
        <a
          href="https://drive.google.com/file/d/1wDgiNAPt2gFSkPs0hqgp3gglQQ5nLcJe/view?usp=sharing"
          target="_blank"
        >
          <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
            resume
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Menu;
