import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[1024px]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
