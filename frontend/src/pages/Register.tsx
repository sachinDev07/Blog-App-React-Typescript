import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", inputs);
      toast.success("Successfully registered!");
      navigate("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response.data);
    }
  }

  return (
    <section className="fcc flex-col bg-[#b9e7e7]">
      <h1 className="text-2xl font-bold text-teal-800 mb-[20px]">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 bg-white gap-5 w-[300px]"
      >
        <input
          type="text"
          name="username"
          required
          placeholder="username"
          onChange={handleOnChange}
          className="p-[10px] outline-none border-b-2 border-gray-500"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          onChange={handleOnChange}
          className="p-[10px] outline-none border-b-2 border-gray-500"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="password"
          onChange={handleOnChange}
          className="p-[10px] outline-none border-b-2 border-gray-500 bg-white"
        />
        <button
          type="submit"
          className="p-[10px] border-none bg-teal-700 active:bg-teal-900 rounded-md text-white cursor-pointer"
        >
          Register
        </button>
        {error && (
          <p className="text-center text-red-700 font-medium">Error: {error}</p>
        )}
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
