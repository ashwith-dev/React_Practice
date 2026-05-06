import React from 'react'
import { useState } from 'react'

function Todomain() {

    const[todoList,setTodoList] = useState([]);
    const[inputString, updatingString] = useState("");

    const deleteTodo = (todoToBeDeleted) => {
        setTodoList(todoList.filter(
            (currentTodoInIteration) => currentTodoInIteration !== todoToBeDeleted,
        ),
      );
    };

  return (
   <div className='bg-gray-100 h-dvh flex justify-center items-center flex-col p-30'>
        <div className='py-10 px-8 min-w-100'>
            <input type="text" className="border border-black px-4 py-2 mx-10 rounded" onChange={(event) => updatingString(event.target.value)}/>
            <button className='px-5 py-2 bg-indigo-600 text-white rounded' onClick={() => setTodoList([...todoList,inputString])}>Add</button>
        </div>
        <div>
            {todoList.map((task ,index) => (
                <div className='flex gap-5 justify-between' key={index}>
                    <h1>{task}</h1>
                    <div className='gap-5 flex'>
                        <button className='bg-red-400 rounded text-white px-2 py-2' onClick={() => deleteTodo(task)}>X</button>
                        <button className='bg-purple-400 rounded text-white px-4 py-1'>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Todomain