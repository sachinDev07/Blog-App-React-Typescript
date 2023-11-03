import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="">
      <div className="py-[10px] flex items-center justify-between">
        <div className="">
          <Link to="/">
            <img src={Logo} alt="" className="w-[120px]" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/?cat=art">
            <h6 className="text-base font-light">ART</h6>
          </Link>
          <Link to="/?cat=science">
            <h6 className="text-base font-light">SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology">
            <h6 className="text-base font-light">TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=cinema">
            <h6 className="text-base font-light">CINEMA</h6>
          </Link>
          <Link to="/?cat=design">
            <h6 className="text-base font-light">DESIGN</h6>
          </Link>
          <Link to="/?cat=food">
            <h6 className="text-base font-light">FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout} className="cursor-pointer">
              Logout
            </span>
          ) : (
            <Link className="text-base font-light" to="/login">
              Login
            </Link>
          )}
          <span className="bg-[#b9e7e7] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center font-light border-[1px] border-white hover:text-teal-700 hover:bg-white hover:border-teal-900">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
