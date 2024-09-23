import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Form(){
    const [focusedInput, setFocusedInput] = useState({name:false, email:false, password:false})
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
            <h3 className="text-xl font-bold text-[#CDD6DD] fade-in-slide-up">STAY HYDRATED, STAY HEALTHY!</h3>

            <h1 className="text-5xl mb-1 font-black text-[#1E1E1E] w-[700px] fade-in-slide-up">
                <span className="wave">Welcome</span> <span className="wave" style={{ animationDelay: '0.1s' }}>To</span> <span className="wave" style={{ animationDelay: '0.2s' }}>AquaVerse</span>
            </h1>

            <div className="fade-in-slide-up">
                <span className="text-[#CDD6DD] font-semibold ">Already have an account?{' '}</span>
                <Link to="/signIn" className="text-[#165A9A] font-bold">Sign In</Link>
            </div>

            </div>

            <div className="mb-6 relative">
                <input id="name" name="name" type="text" className={`mt-1 p-4 w-[660px] h-[50px] border-2 border-[#CDD6DD] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.name ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('name')} onBlur={(e) => handleBlur('name', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.name ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base font-medium top-4 text-[#CDD6DD]'}`} htmlFor="name">Name</label>
            </div>
            <div className="mb-6 relative">
                <input id="email" name="email" type="email" className={`mt-1 p-4 w-[660px] h-[50px] border-2 placeholder-transparent border-[#CDD6DD] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.email ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} placeholder="Email" required onFocus={()=> handleFocus('email')} onBlur={(e) => handleBlur('email', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.email ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base font-medium top-4 text-[#CDD6DD]'}`} htmlFor="email">Email</label>
            </div>
            <div className="mb-6 relative">
                <input id="password" name="password" type="password" className={`mt-1 p-4 w-[660px] h-[50px] border-2 placeholder-transparent border-[#CDD6DD] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.password ? 'border-[#24619D]': 'border-[#7BA5C9]'}`}placeholder="Password" required onFocus={()=> handleFocus('password')} onBlur={(e)=> handleBlur('password', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.password ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base font-medium top-4 text-[#CDD6DD]'}`} htmlFor="password">Password</label>
            </div>

            <div className="flex justify-left mt-11 ml-[250px]">
            <button type="submit" className="w-[140px] text-xl font-bold bg-[#24619D] text-white p-3 rounded-xl hover:bg-[#7BA5C9]" onClick={() => navigate('/home')}>Sign Up</button>
            </div>

            
            
        </form>
    )
}

export default Form;