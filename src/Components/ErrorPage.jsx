import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../assets/lottieError.json";
const ErrorPage = () => {
  return (
    <div>
      <div className="w-6/12 mx-auto">
        <Lottie animationData={errorAnimation} />
      </div>
      <Link to="/">
        <button className="px-6 py-2 text-lg text-white rounded-md mx-auto flex bg-[#00BFA5] ">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
