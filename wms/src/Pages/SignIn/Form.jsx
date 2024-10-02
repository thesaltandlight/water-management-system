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
            <h3 className="text-xl font-bold text-[#B1C7D9] fade-in-slide-up">STAY HYDRATED, STAY HEALTHY!</h3>

            <h1 className="text-5xl mb-1 font-serif font-black text-[#24619D] w-[700px] fade-in-slide-up">
                <span className="wave">Hi!</span> <span className="wave" style={{ animationDelay: '0.1s' }}>Welcome</span> <span className="wave" style={{ animationDelay: '0.2s' }}>Back</span>
            </h1>
            
            <div className="fade-in-slide-up">
                <span className="text-[#B1C7D9] font-serif font-medium">Don't have an account?{' '}</span>
                <Link to="/signUp" className='text-[#165A9A] font-bold'>Sign Up</Link>
            </div>
            </div>

            <div className="mb-2 relative">
                <input id="identifier" name="identifier" type="text" className={`mt-1 p-4 w-[660px] h-[50px] border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.identifier ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('identifier')} onBlur={(e) => handleBlur('identifier', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.identifier ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="identifier">Username Or Email</label>
            </div>
            
            <div className="mb-8 relative">
                <input id="password" name="password" type="password" className={`mt-1 p-4 w-[660px] h-[50px] border placeholder-transparent border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.password ? 'border-[#24619D]': 'border-[#7BA5C9]'}`}placeholder="Password" required onFocus={()=> handleFocus('password')} onBlur={(e)=> handleBlur('password', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.password ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="password">Password</label>
            </div>

            <div className="flex justify-left">
                <button type="submit" className="w-[140px] text-lg font-bold bg-[#165A9A] text-white p-3 rounded-full hover:bg-[#7BA5C9]" onClick={() => navigate('/home')}>Dive In</button>
                <button type="submit" className="w-[100px] text-lg font-bold  text-[#B1C7D9] p-3 hover:text-[#165A9A]" onClick={() => navigate('/home')}>Skip</button>
            </div>
        </form>
    )
}

export default Form;