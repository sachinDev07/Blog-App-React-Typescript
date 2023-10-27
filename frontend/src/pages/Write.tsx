import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add mt-5 flex gap-5">
      <div className="content flex-5 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Title"
          className="p-3 border-[1px] border-solid border-gray-400"
        />
        <div className="editorContainer h-[300px] overflow-scroll border-[1px] border-solid border-gray-400">
          <ReactQuill
            className="editor h-full outline-none"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu flex-2 flex flex-col gap-5">
        <div className="item border-[1px] border-solid border-gray-800 p-3 flex-1 flex flex-col justify-between text-sm text-[#555]">
          <h1 className="text-lg">Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file underline cursor-pointer" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons flex justify-between">
            <button className="cursor-pointer text-teal-700 bg-white border border-teal-500 p-1 rounded hover:bg-teal-700 hover:text-white transition duration-200 ease-in-out">
              Save as a draft
            </button>
            <button className="cursor-pointer text-white bg-teal-500 border border-teal-500 p-1 rounded hover:bg-teal-700 hover:text-white transition duration-200 ease-in-out">
              Publish
            </button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat flex items-center gap-2 text-teal-500">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat flex items-center gap-2 text-teal-500">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat flex items-center gap-2 text-teal-500">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat flex items-center gap-2 text-teal-500">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat flex items-center gap-2 text-teal-500">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat flex items-center gap-2 text-teal-500">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
