import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { crateUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name,photo,email, password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should be more than 6 character , must have an uppercase and lowercase letter"
      );
      return;
    }
    crateUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('User created successfully')
        form.reset()
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="lg:w-6/12 mx-auto">
      <div className="w-full p-8 space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <h1 className="text-center">Register to create new account</h1>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6"
        >
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
              required
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
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-white text-lg bg-[#E3B577]"
          >
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have account?
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
