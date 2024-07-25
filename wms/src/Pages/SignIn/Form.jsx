import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Form(){
    const [focusedInput, setFocusedInput] = useState({identifier:false, password:false})
    const navigate = useNavigate()

    const handleFocus = (field) => {
        setFocusedInput((previousState) => ({...previousState, [field]:true}))
    }

    const handleBlur = (field, value) => {
        if(!value){
            setFocusedInput((previousState) => ({...previousState, [field]:false}))
        }
    }

    return(
        <form className="w-full max-w-md mx-auto flex flex-col justify-center h-full">
            <div className="mb-6">
            <h1 className="text-5xl mb-1 font-serif font-black text-[#24619D] w-[700px] fade-in-slide-up">
                <span className="wave">Hi!</span> <span className="wave" style={{ animationDelay: '0.1s' }}>Welcome</span> <span className="wave" style={{ animationDelay: '0.2s' }}>Back</span>
            </h1>
            <h3 className="text-2xl font-serif font-bold text-[#7BA5C9] mb-8 fade-in-slide-up">Stay Hydrated, Stay Healthy!</h3>
            </div>

            <div className="mb-6 relative">
                <input id="identifier" name="identifier" type="text" className={`mt-1 p-4 w-[660px] h-[50px] border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.identifier ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('identifier')} onBlur={(e) => handleBlur('identifier', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.identifier ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="identifier">Name Or Email</label>
            </div>
            
            <div className="mb-6 relative">
                <input id="password" name="password" type="password" className={`mt-1 p-4 w-[660px] h-[50px] border placeholder-transparent border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.password ? 'border-[#24619D]': 'border-[#7BA5C9]'}`}placeholder="Password" required onFocus={()=> handleFocus('password')} onBlur={(e)=> handleBlur('password', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.password ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="password">Password</label>
            </div>

            <div className="flex justify-center mt-11 ml-[250px]">
                <button type="submit" className="w-[140px] text-xl font-bold bg-[#24619D] text-white p-3 rounded-xl hover:bg-[#7BA5C9]" onClick={() => navigate('/home')}>Sign In</button>
            </div>

            <div className='w-1/2 flex flex-col items-center justify-end p-6 fixed right-0 top-0' style={{marginTop: '630px'}} >
            <div className="mb-16 text-center">
                <span className="text-[#24619D] font-serif font-semibold">Don't have an account?{' '}</span>
                <Link to="/signUp" className='text-[#ACCEE9] font-bold'>Sign Up</Link>
            </div>
            </div>
            
        </form>
    )
}

export default Form;