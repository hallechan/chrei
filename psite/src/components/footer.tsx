const Footer = () => {
  return (
    <div className="flex justify-center border-solid border-t-2 border-[#272727] bg-[var(--offblack)]">
      <div>
        <h1 className="m-16 mb-2 mr-64 font-cursive text-6xl text-[var(--pink)]">
          write me
        </h1>
        <p className="ml-16 mb-16 text-[var(--offwhite)] text-2xl text-left font-reg">
          made w kisses by hailey&nbsp; &nbsp; ʚꨄɞ
        </p>
      </div>
      <div className="m-20 ml-96 flex">
        <a href="mailto:haileychanca@gmail.com" target="_blank">
          <img
            className="h-12 m-4 hover:animate-jump"
            src="src/assets/logos/socials/mail.png"
          ></img>
        </a>
        <a href="https://github.com/chanhailey" target="_blank">
          <img
            className="h-12 m-4 hover:animate-jump"
            src="src/assets/logos/socials/github.png"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/hailey-chan-337617275/"
          target="_blank"
        >
          <img
            className="h-12 m-4 hover:animate-jump"
            src="src/assets/logos/socials/linkedin.png"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
