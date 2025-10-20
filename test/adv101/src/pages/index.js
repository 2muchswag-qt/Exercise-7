import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

    export default function Login() { 
const router = useRouter();

const [state, setState] = useState({ 
email: '',
password: '',

  });

  function handleOnChangeInput(event){

console.log(event.target.name);
setState({
    ...state,
    [event.target.name]: event.target.value,
});
  }

 function handleButtonOnSubmit(){
  router.push('/dashboard');
    console.log(state);
   
  }

        return (
  
           
               <div>
                  <form 
                    className="p-6 border-4 border-violet-400 rounded-md w-96 mx-auto mt-10">
                    
                      <div className="text-4xl p-7 border-5 border-violet-400 
                      font-bold text-center mt-6">Login Page </div>
                      <br/>
                         <label >Email: </label>
              <br/>
            
        
                    <input
                     onChange={handleOnChangeInput}
                           value={state.email}
                     className="border-1 border-blue-600 rounded-md mb-6"
                     name="email"
                      type="text"
                        autoComplete="off"
                    
   
                       required
                       />
                             <br/>
                         <label>Password: </label>
                           <br/>
                           <input
                                        onChange={handleOnChangeInput}
 
                            value={state.password}
                          className="border-1 border-red-500  rounded-md mb-4"
                            name="password"
                          type="password"
                           required
                          />
                         <br/>
                       <button 
                       type="submit"
                       onClick={handleButtonOnSubmit}
                       className="border-3 border- mt-5 p-2 mb-9 ">Login 
                    <br/>
                      </button>
                 </form>
            </div>
        )
    }