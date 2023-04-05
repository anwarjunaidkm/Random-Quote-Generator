import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {
  const [state,setState] = useState('')
  const [input,setInput] = useState('')
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
    }
  }

  useEffect(()=>{

   
    getQuote()


  },[])

  
  return (
    <div className=" bg-[#141416] h-screen w-full">
      <div className="flex  flex-col justify-center  items-center p-4 h-full">
        <div className="max-w-[500px]  w-full text-white ">
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
           <div className='flex  justify-end  py-1'>

             <h1>{state?.author}</h1> 
              
          </div>
        
        
            </p> 
           
        
        

        </div>
        <div className='flex  justify-center py-5 '>
            <input className='rounded-full p-2 mx-3 hover:outline-1' type="text" placeholder='Category' onChange={(e)=>setInput(e.target.value)} />
        <button class="rounded-full bg-neutral-800 text-white py-2 px-4 text-2sm hover:bg-neutral-700 " onClick={getQuote}>Generate</button>
        </div>
       
       


     
        <span className='text-white text-[10px]'>&copy; <a href="https://github.com/anwarjunaidkm">github.com/anwarjunaidkm</a> </span>
      </div>
    </div>
  );
}

export default Home