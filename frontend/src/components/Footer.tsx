import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-[100px] p-5 bg-[#b9e7e7] flex items-center justify-between text-sm">
      <img src={Logo} alt="logo" className="h-[50px]" />
      <span>
        Made with <span className="text-red-700">♥</span> and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;