import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { editTodo } from '../Features/slice'
const Edit = () => {
  const tl = useSelector(state => state.counter.value)

  const navigate=useNavigate()

  const dispatch=useDispatch()
  
  const {id} = useParams()
  const editInput=useRef(null)

  const editBtnHandler = (index) => {
    const changed=editInput.current.value
    dispatch(editTodo([changed,index]))
    navigate('/')
    
  }
    
  return (
    <>
      {tl.map(
        (item, index) =>
          index == id && (
            <div
              key={index}
              className="h-screen w-full max-sm:block flex justify-center items-center bg-blue-200 max-sm:text-center max-sm:pt-24"
            >
              <input
                ref={editInput}
                id="editTodo"
                name="editTodo"
                className="border border-black rounded text-3xl text-gray-500 p-2 mr-2 max-sm:mb-6 focus:outline-none "
                defaultValue={item}
                type="text"
              />
              <button
                onClick={() => editBtnHandler(index)}
                className="border border-black rounded text-3xl text-red-500 px-3 py-2 max-sm:py-0"
              >
                Save
              </button>
            </div>
          )
      )}
    </>
  );
}

export default Edit