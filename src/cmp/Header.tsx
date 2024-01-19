const Header = () => {
  return (
    <div className="mx-24 mt-24">
      <ul
        className="flex justify-center gap-x-48 font-helvetica
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
          href="https://drive.google.com/file/d/1m-5wAh5nN5qqkNfrc5TT8jwOYTtWU52C/view?usp=sharing"
        >
          <li className="hover:text-grey underline">cv</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
