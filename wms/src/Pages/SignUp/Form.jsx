import { useState } from "react";

function Form(){
    const [focusedInput, setFocusedInput] = useState({name:false, email:false, password:false})

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
            <h1 className="text-5xl mb-1 font-serif font-black text-[#24619D] w-[700px]">Welcome To AquaVerse</h1>
            <h3 className="text-2xl font-serif font-bold text-[#7BA5C9] mb-8 ">Stay Hydrated, Stay Healthy</h3>
            </div>

            <div className="mb-6 relative">
                <input id="name" name="name" type="text" className={`mt-1 p-4 w-[660px] h-[50px] border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.name ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} required onFocus={()=> handleFocus('name')} onBlur={(e) => handleBlur('name', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.name ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="name">Name</label>
            </div>
            <div className="mb-6 relative">
                <input id="email" name="email" type="email" className={`mt-1 p-4 w-[660px] h-[50px] border placeholder-transparent border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.email ? 'border-[#24619D]': 'border-[#7BA5C9]'}`} placeholder="Email" required onFocus={()=> handleFocus('email')} onBlur={(e) => handleBlur('email', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.email ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="email">Email</label>
            </div>
            <div className="mb-6 relative">
                <input id="password" name="password" type="password" className={`mt-1 p-4 w-[660px] h-[50px] border placeholder-transparent border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.password ? 'border-[#24619D]': 'border-[#7BA5C9]'}`}placeholder="Password" required onFocus={()=> handleFocus('password')} onBlur={(e)=> handleBlur('password', e.target.value)}></input>
                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.password ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="password">Password</label>
            </div>

            <div className="flex justify-center mt-11 ml-[250px]">
            <button type="submit" className="w-[140px] text-xl font-bold bg-[#24619D] text-white p-3 rounded-xl hover:bg-[#7BA5C9]">Sign Up</button>
            </div>
        </form>
    )
}

export default Form;