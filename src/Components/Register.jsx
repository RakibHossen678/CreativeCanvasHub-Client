import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-6/12 mx-auto">
      <div className="w-full p-8 space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <h1 className="text-center">Login to access your account</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 ">
            <label htmlFor="username" className="block py-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full border-2 outline-none px-4 py-3 rounded-md "
            />
          </div>
          <div className="space-y-1 ">
            <label htmlFor="username" className="block py-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border-2 outline-none px-4 py-3 rounded-md "
            />
          </div>
          <div className="space-y-1 ">
            <label htmlFor="username" className="block py-2">
              PhotoURl
            </label>
            <input
              type="test"
              name="photo"
              id="photo"
              placeholder="Enter your email"
              className="w-full border-2 outline-none px-4 py-3 rounded-md "
            />
          </div>
          <div className="space-y-1 ">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 outline-none"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white text-lg bg-[#00BCD4]">
            Register
          </button>
        </form>
        
        
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have  account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="underline "
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
