import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/" className="uppercase text-3xl lg:text-6xl font-semibold cursor-pointer mt-3 lg:mt-6 text-secondary-content">
        Quize Application
      </Link>
      <hr className="my-3 lg:my-9 w-full bg-gray-600" />
    </div>
  );
};

export default Header;
