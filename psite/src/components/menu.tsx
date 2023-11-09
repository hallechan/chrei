const Menu = () => {
  return (
    <div>
      <a>
        <img
          className="m-6 h-12 hover:animate-wiggle"
          src="src/assets/logos/squaredheart.svg"
        />
      </a>
      <ul
        className="flex justify-center gap-x-24 
      text-lg text-[var(--offwhite)] font-reg
      animate-fade-up"
      >
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          home
        </li>
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          about
        </li>
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          projects
        </li>
        <li className="p-4 hover:font-bold hover:cursor-pointer hover:text-[var(--pink)] hover:animate-jump">
          resume
        </li>
      </ul>
    </div>
  );
};

export default Menu;
