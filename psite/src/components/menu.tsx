const Menu = () => {
  return (
    <div>
      <a>
        <img
          className="m-6 h-12 hover:animate-wiggle"
          src="public/assets/logos/squaredheart.svg"
        />
      </a>
      <ul
        className="flex justify-center gap-x-24 
      text-lg text-[var(--offwhite)] font-reg
      animate-fade-up"
      >
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          <a href="/">home</a>
        </li>
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          <a href="/about">about</a>
        </li>
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          <a href="/projects">projects</a>
        </li>
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          resume
        </li>
      </ul>
    </div>
  );
};

export default Menu;
