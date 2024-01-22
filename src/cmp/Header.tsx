const Header = () => {
  return (
    <div className="mx-8 md:mx-24 mt-24">
      <ul
        className="sm:flex-shrink md:flex
        sm:gap-y-2 md:gap-y-0
        sm:gap-x-0 md:gap-x-16 
        lg:gap-x-48 
        justify-center font-helvetica
       text-black tracking-tighterer text-xl"
      >
        {/* HOME */}
        <a href="/">
          <li className="hover:text-grey underline">home</li>
        </a>
        {/* ABOUT */}
        <a href="/abt">
          <li className="hover:text-grey underline">about</li>
        </a>
        {/* DESIGN */}
        <a href="/des">
          <li className="hover:text-grey underline">design</li>
        </a>
        {/* CV */}
        <a
          target="_blank"
          href="https://drive.google.com/file/d/12Hzi2u42OyOlcytS1NxFNy15cr97vwWT/view?usp=sharing"
        >
          <li className="hover:text-grey underline">cv</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
