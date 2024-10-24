import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../Features/slice.js'
import '../App.css'
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tl = useSelector((state) => state.counter.value)
  
  const inputTodo = useRef(null);

  const addBtnHandler = () => {
    if (inputTodo.current.value !== '')
    dispatch(updateTodo(inputTodo.current.value));
    inputTodo.current.value = '';
  };

  
  const deleteBtnHandler = (index) => {
    dispatch(deleteTodo(index))
  };

  const addTodo = useRef(null)
  const showAdd = (e) => {
    if (
      addTodo.current.className ==
      "h-[100%] w-[80%] max-sm:w-[100%] bg-blue-200 flex max-sm:block  justify-center items-center max-sm:fixed max-sm:top-0 max-sm:left-[0%] max-sm:transition-all max-sm:duration-500"
    ) {
      addTodo.current.className =
        "h-[100%] w-[80%] max-sm:w-[100%] bg-blue-200 flex max-sm:block  justify-center items-center max-sm:fixed max-sm:top-0 max-sm:left-[100%] max-sm:transition-all max-sm:duration-500";
      e.target.innerText = "Add Task";
    } else {
      addTodo.current.className =
        "h-[100%] w-[80%] max-sm:w-[100%] bg-blue-200 flex max-sm:block  justify-center items-center max-sm:fixed max-sm:top-0 max-sm:left-[0%] max-sm:transition-all max-sm:duration-500";
      e.target.innerText = "Back to Home";
    }

    
  }
  

  return (
    <div className="h-screen w-full bg-gray-100 max-sm:relative flex max-sm:block">
      <div className="h-[100%] w-[30%] max-sm:w-[100%] bg-blue-100 border-black">
        <h1 className="text-3xl max-sm:text-4xl text-red-500 font-semibold text-center max-sm:text-start mt-4 max-sm:mt-0 max-sm:ml-3 max-sm:pt-5 mb-2">
          Todo's
        </h1>
        <button
          onClick={showAdd}
          className=" border rounded px-2 py-1 absolute top-6 right-4 border border-black text-xl z-10 text-red-500 sm:hidden"
        >
          Add Task
        </button>
        <div id="todoList" className="h-[89%] overflow-auto mt-3 max-sm:mt-8 mx-3  ">
          {tl.length > 0 ? (
            tl.map((item, index) => (
              <div key={index} className="mx-2 my-2  ">
                <li className="text-gray-500 text-2xl leading-6 my-4 list-none">
                  <span className="font-semibold mr-1 text-red-500">
                    {index + 1}.
                  </span>
                  {item}
                </li>
                <div className=" flex justify-end">
                  <Link
                    to={`/edit/${index}`}
                    className="text-red-500 border border-black rounded px-2 py-0 mr-2 text-sm"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => deleteBtnHandler(index)}
                    className="text-red-500 border border-black rounded px-2 py-0 text-sm"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-xl max-sm:text-3xl">
              There is no task available to do.
            </h1>
          )}
        </div>
      </div>
      <div
        ref={addTodo}
        className="h-[100%] w-[70%] max-sm:w-[100%] bg-blue-200 flex max-sm:block  justify-center items-center max-sm:fixed max-sm:top-0 max-sm:left-[100%] max-sm:transition-all max-sm:duration-500"
      >
        <div className="flex max-sm:block justify-center items-center  max-sm:mt-28 max-sm:text-center pr-3">
          <input
            ref={inputTodo}
            id="inputTodo"
            name="inputTodo"
            className="border border-black rounded text-3xl text-gray-500 p-2 mr-3 max-sm:mr-0 focus:outline-none"
            type="text"
            placeholder="Enter your task "
          />
          <button
            onClick={addBtnHandler}
            className="border border-black rounded text-3xl max-sm:text-lg text-red-500 px-3  py-2 max-sm:py-1 max-sm:mt-4 "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;