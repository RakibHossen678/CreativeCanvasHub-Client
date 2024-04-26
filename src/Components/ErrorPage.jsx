import { Link } from "react-router-dom";
import error from "../assets/404.gif";
const ErrorPage = () => {
  return (
    <div>
      <img className="w-ful h-full mx-auto" src={error} alt="" />
      <Link to="/">
        <button className="px-6 py-2 text-lg text-white rounded-md mx-auto flex bg-[#E3B577]">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
