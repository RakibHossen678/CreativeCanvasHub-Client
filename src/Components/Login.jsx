import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleLogin, githubLogin, facebookLogin } =
    useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(password, email);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User logged in successfully");
        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("User already added");
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("user logged in successfully");
        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Already Logged in");
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("user logged in successfully");
        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Already Logged in");
      });
  };
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("user logged in successfully");
        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Already Logged in");
      });
  };
  return (
    <div className="lg:w-6/12 mx-auto">
      <div className="w-full p-8 space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <h1 className="text-center">Login to access your account</h1>
        <form
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 ">
            <label htmlFor="username" className="block py-2">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border-2 outline-none px-4 py-3 rounded-md "
            />
          </div>
          <div className="space-y-1 ">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 outline-none"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white text-lg bg-[#00BFA5] ">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            type="submit"
            aria-label="Log in with Google"
            className="p-3 rounded-sm text-2xl text-[#331A15]"
          >
            <FaGoogle />
          </button>
          <button
            onClick={handleFacebookLogin}
            aria-label="Log in with Twitter"
            className="p-3 rounded-sm text-2xl text-[#331A15]"
          >
            <FaFacebook />
          </button>
          <button
            onClick={handleGithubLogin}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm text-2xl text-[#331A15]"
          >
            <FaGithub />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don not have an account?
          <Link to="/register" rel="noopener noreferrer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
