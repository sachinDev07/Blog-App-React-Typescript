import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      login(inputs);
      toast.success("Successfully login");
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.response?.data);
    }
  }

  return (
    <section className="fcc flex-col bg-[#b9e7e7]">
      <h1 className="text-2xl font-bold text-teal-800 mb-[20px]">Login</h1>
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
          Login
        </button>
        {error && (
          <p className="text-center text-red-700 font-medium">Error: {error}</p>
        )}
        <p className="text-[14px]">
          Don't have an account?{" "}
          <span className="text-pink-700 font-medium">
            <Link to={"/register"}>register here</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
