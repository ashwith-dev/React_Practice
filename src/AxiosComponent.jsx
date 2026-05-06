import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosComponent() {
  const [quote, setQuote] = useState("");

  const apiCallFunc = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      setQuote(response.data.quote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCallFunc();
  }, []);

  return (
    <div className="flex flex-col text-center justify-center items-center">
      <button onClick={apiCallFunc} className="border border-black m-5 p-3 bg-amber-200 rounded ">
        Generate quote
      </button>
      <h1>{quote}</h1>
    </div>
  );
}

export default AxiosComponent;