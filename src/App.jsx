
import './App.css'
import { useState } from "react";


function App() {
  const [currentValue,newValue] = useState(0);
  return (
    <>
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <p className="text-3xl font-bold mb-6 text-black">Count: {currentValue}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={()=>newValue(currentValue+1)} className="bg-green-400  text-white px-4 py-2 rounded-lg">Increment</button>
            <button onClick={()=>newValue(currentValue-1)} className="bg-yellow-400  text-white px-4 py-2 rounded-lg">Decrement</button>
            <button onClick={()=>newValue(0)} className="bg-red-400  text-white px-4 py-2 rounded-lg">Reset</button>
          </div>
       </div>
      </div>
    </>
  );
}

export default App

