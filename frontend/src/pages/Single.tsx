import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="flex gap-12">
      <div className="flex-5 flex flex-col gap-7">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="blog image"
          className="w-full h-[300px] object-cover"
        />
        <div className="flex items-center gap-2 text-sm">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="blog image"
            className="w-12 h-12 rounded-[50%] object-cover"
          />
          <div className="info">
            <span className="font-bold">Jhone</span>
            <p>2 days ago</p>
          </div>
          <div className="flex gap-1">
            <Link to={`/write?edit=2`}>
              <img
                src={Edit}
                alt="edit button"
                className="w-7 h-7 cursor-pointer"
              />
            </Link>
            <img
              src={Delete}
              alt="delete button"
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
        <h1 className="text-[42px] text-[#333]">Lorem ipsum dolor sit amet.</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          perspiciatis eum rem eligendi! Molestiae, vero.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed
          architecto quasi voluptas reprehenderit iure, nisi, error fugit
          voluptatibus corrupti soluta. Fugit esse culpa expedita!
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          voluptatibus autem animi nisi ab optio culpa illo ut officia ad ipsa
          iste maxime veniam cupiditate sint, omnis sed mollitia repellat
          recusandae eos. Sed eos iusto adipisci. Atque quis architecto neque!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
