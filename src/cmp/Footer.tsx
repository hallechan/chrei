const Footer = () => {
  return (
    <div className="my-20 flex justify-between max-w-6xl">
      <div className="flex-row">
        <p className="ml-8 lg:ml-72 text-black font-helvetica tracking-tighterer text-2xl">
          made with <img className="h-8" src="/icons/hc.png"></img> by hailey
        </p>
      </div>
      <div className="flex mr-4">
        {/* LINKEDIN */}
        <a href="https://www.linkedin.com/in/chan-hailey/" target="_blank">
          <img
            className="h-12 m-4 hover:animate-jump"
            src="/icons/footericons/linkedin.png"
          ></img>
        </a>
        {/* GITHUB */}
        <a href="https://github.com/hallechan" target="_blank">
          <img
            className="h-12 m-4 hover:animate-jump"
            src="/icons/footericons/github.png"
          ></img>
        </a>
        {/* MAIL */}
        <a href="mailto:haileychanca@gmail.com" target="_blank">
          <img
            className="h-12 m-4 hover:animate-jump"
            src="/icons/footericons/mail.png"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
