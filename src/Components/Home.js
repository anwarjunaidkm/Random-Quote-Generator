import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';


function Home() {
  const [state,setState] = useState('')
  const [input,setInput] = useState('')
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);


  console.log(input);


  
 
  async function getQuote() {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${input}`,{
        headers: {
          'X-Api-Key': 'ErWsQYaltGcHxcgZpkptsw==6inDmI72oifyv3W3'
        }

       
      });
      const responseData = response.data;
      setState(responseData[0])
      
      
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      getQuote();
    }
  }, [mounted]);

  
  return (
    <>
      {loading && <div className="flex  items-center justify-center bg-[#141416] h-screen w-full"  > <ReactLoading className="" type="bubbles" color="#ffff" /></div>}

    <div className=" bg-[#141416] h-screen w-full">
      <div className="flex  flex-col justify-center  items-center p-4 w-full h-full">
        <div className="max-w-[500px]  w-full text-white  ">
        <h1 className='flex justify-center'>
          <p>

          {state?.category}
          </p>
          </h1>
           <p className='p-3 my-auto' >
           &ldquo;  <span className='p-3'>
           {state?.quote}
           
            </span> 
            &rdquo;
           <div className='flex  justify-end w-full py-1'>

             <h1 className='text-[10px]'>-{state?.author}</h1> 
              
          </div>
        
        
            </p> 
           
        
        

        <div className='flex flex-col   sm:flex-row  justify-center py-5 p-3  '>
            <input className='rounded-full p-1 m-2 sm:p-2 sm:px-3 hover:outline-1  outline-[#262626] text-center text-sm  text-gray-800 ' type="text" placeholder='Category' onChange={(e)=>setInput(e.target.value)} />
        <button class="rounded-full bg-neutral-800 p-1 text-white m-2  sm:p-2 sm:px-3 text-sm hover:bg-neutral-700  " onClick={getQuote}>Generate</button>
        </div>
        </div>
       
       


     
      <span className='text-white flex items-end text-[10px]'>&copy; <a href="https://github.com/anwarjunaidkm">github.com/anwarjunaidkm</a> </span>
      </div>

    </div>
    </>
  );
}

export default Home