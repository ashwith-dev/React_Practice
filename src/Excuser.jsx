import React, { useState , useEffect  } from 'react';
import axios from 'axios';

function ExcuserComponent() {
    const [excuseCat, setExcuse] = useState("");
    const [dataObj , setDataObj] = useState({});
    
    const apiCall = async () => {
        const response = await axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseCat}`);
        setDataObj(response.data[0]);
    }

    useEffect(() => {
        apiCall();
    }, [excuseCat]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex gap-4 mb-6">
            <button onClick={()=>setExcuse("gaming")} className="px-4 py-2 bg-blue-500 text-white rounded">Gaming</button>
            <button onClick={()=>setExcuse("office")} className="px-4 py-2 bg-green-500 text-white rounded">Office</button>
            <button onClick={()=>setExcuse("family")} className="px-4 py-2 bg-purple-500 text-white rounded">Family</button>
            <button onClick={()=>setExcuse("party")} className="px-4 py-2 bg-pink-500 text-white rounded">Party</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
            <h1 className="text-lg font-semibold text-gray-700 mb-2">Category : {dataObj.category}</h1>
            <h1 className="text-gray-600 mb-2">Excuse : {dataObj.excuse}</h1>
            <h1 className="text-gray-500 text-sm">Id : {dataObj.id}</h1>
        </div>
    </div>
  )
}

export default ExcuserComponent