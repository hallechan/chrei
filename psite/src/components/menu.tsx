import { TEAnimation } from "tw-elements-react";

const Menu = () => {
  return (
    <div>
      <a>
        <TEAnimation
          animation="[tada_1s_ease-in-out]"
          start="onHover"
          reset
          className="[&>svg]:w-12"
        >
          <img className="m-6 h-12" src="src/assets/logos/squaredheart.svg" />
        </TEAnimation>
      </a>
    </div>
  );
};

export default Menu;
