import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="fcc flex-col bg-[#b9e7e7]">
      <h1 className="text-2xl font-bold text-teal-800 mb-[20px]">Register</h1>
      <form className="flex flex-col p-8 bg-white gap-5 w-[300px]">
        <input
          type="text"
          required
          placeholder="username"
          className="p-[10px] outline-none border-b-2 border-gray-500"
        />
        <input
          type="email"
          required
          placeholder="email"
          className="p-[10px] outline-none border-b-2 border-gray-500"
        />
        <input
          type="password"
          required
          placeholder="password"
          className="p-[10px] outline-none border-b-2 border-gray-500 bg-white"
        />
        <button className="p-[10px] border-none bg-teal-700 active:bg-teal-900 rounded-md text-white cursor-pointer">
          Register
        </button>
        <p className="text-[14px]">
          Do you have an account?{" "}
          <span className="text-pink-700 font-medium">
            <Link to={"/login"}>login here</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Register;
