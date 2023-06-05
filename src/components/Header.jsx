import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/" className="uppercase text-6xl cursor-pointer mt-6">
        Quize Application
      </Link>
      <hr className="my-9 w-full bg-gray-600" />
    </div>
  );
};

export default Header;
