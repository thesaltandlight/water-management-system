import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Form(){
    const [focusedInput, setFocusedInput] = useState({firstName:false, lastName:false, username: false, email:false, password:false})
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
            {/* Header */}
            <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#B1C7D9] fade-in-slide-up" style={{fontFamily: 'Brush Script MT, cursive'}}>Stay Hydrated, Stay Healthy!</h3>

            <h1 className="text-4xl mb-1 font-extrabold text-[#1E1E1E] w-[700px] fade-in-slide-up" style={{fontFamily: 'Inria serif, serif'}}>Welcome To AquaVerse</h1>

            <div className="fade-in-slide-up">
                <span className="text-[#B1C7D9] font-serif font-medium ">Already have an account?{' '}</span>
                <Link to="/signIn" className="text-[#165A9A] font-bold">Sign In</Link>
            </div>
            </div>

            {/* input fields */}
            <div className="flex mb-2 space-x-4">
                <div className="relative flex-1">
                    <input id="firstName" name="firstName" type="text" className={`mt-1 p-4 w-[300px] h-[50px] border border-[#B1C7D9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.firstName ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('firstName')} onBlur={(e) => handleBlur('firstName', e.target.value)}></input>
                    <label className={`absolute left-2 duration-200 transition-all ${focusedInput.firstName ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base top-4 text-[#B1C7D9]'}`} htmlFor="firstName">First Name</label>
                </div>

                <div className="relative flex-1">
                    <input id="lastName" name="lastName" type="text" className={`mt-1 p-4 w-[300px] h-[50px] border border-[#B1C7D9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.lastName ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('lastName')} onBlur={(e) => handleBlur('lastName', e.target.value)}></input>
                    <label className={`absolute left-2 duration-200 transition-all ${focusedInput.lastName ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base top-4 text-[#B1C7D9]'}`} htmlFor="lastName">Last Name</label>
                </div>
            </div>

            <div className="mb-2 relative">
                <input id="username" name="username" type="text" className={`mt-1 p-4 w-[615px] h-[50px] border border-[#B1C7D9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.username ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('username')} onBlur={(e) => handleBlur('username', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.username ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base top-4 text-[#B1C7D9]'}`} htmlFor="username">Username</label>
            </div>

            <div className="mb-2 relative">
                <input id="email" name="email" type="email" className={`mt-1 p-4 w-[615px] h-[50px] border placeholder-transparent border-[#B1C7D9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.email ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} placeholder="Email" required onFocus={()=> handleFocus('email')} onBlur={(e) => handleBlur('email', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.email ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base top-4 text-[#B1C7D9]'}`} htmlFor="email">Email</label>
            </div>
            <div className="mb-8 relative">
                <input id="password" name="password" type="password" className={`mt-1 p-4 w-[615px] h-[50px] border placeholder-transparent border-[#B1C7D9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.password ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} placeholder="Password" required onFocus={()=> handleFocus('password')} onBlur={(e)=> handleBlur('password', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.password ? '-top-1 text-xs font-medium text-[#165A9A] px-1 bg-white' : 'text-base top-4 text-[#B1C7D9]'}`} htmlFor="password">Password</label>
            </div>

            <div className="flex justify-left">
                <button type="submit" className="w-[140px] text-lg font-bold bg-[#165A9A] text-white p-3 rounded-full hover:bg-[#7BA5C9]" onClick={() => navigate('/home')}>Dive In</button>
                <button type="submit" className="w-[100px] text-lg font-bold text-[#B1C7D9] p-3 hover:text-[#165A9A]" onClick={() => navigate('/home')}>Skip</button>
            </div>
            
        </form>
    )
}

export default Form;