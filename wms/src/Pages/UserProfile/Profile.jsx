import { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Profile(){
    const [user, setUser] = useState({firstName: '', lastName: '', userName:'', email: '', phone: '', region: '', city:'', district: '', address: '', cardName: '', cardNumber: '', expiration: '', password: ''});
    const [focusedInput, setFocusedInput] = useState({})
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [profilePicture, setProfilePicture] = useState('/assets/profile.png')

    const handleFocus = (field) => {
        setFocusedInput((previousState) => ({...previousState, [field]: true}));
    }

    const handleBlur = (field, value) => {
        if(!value){
            setFocusedInput((previousState) => ({...previousState, [field]: false}));
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
        if (value){
            setFocusedInput((previousState) => ({...previousState, [name]: true}));
        }
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        if (file){
            const imageUrl = URL.createObjectURL(file)
            setProfilePicture(imageUrl)
        }
    }

    const triggerFileInput = () => {
        document.getElementById('fileInput').click()
    }

    const resetProfilePicture = () => {
        setProfilePicture('/assets/profile.png')
    }

    return(
        <div className="flex h-screen bg-[#FFFFFF]">
            <Sidebar />

            <div className="flex-1 p-10 ml-[20%] bg-[#FFF]">
                {/* profile section */}
                <div className="flex items-center space-x-6 mb-10">
                    <img src={profilePicture} alt="User Profile" className="w-[200px] h-[200px] rounded-full object-cover"/>
                    <div>
                        <h1 className="text-[32px] font-bold">{user.firstName.toUpperCase() || 'FirstName'} {user.lastName.toUpperCase() || 'LastName'}</h1>
                        <p className="text-[16px] font-medium text-[#757575]">Joined 2 years ago</p>
                        <div className="mt-3 space-x-4">
                            <button onClick={triggerFileInput} className="px-4 py-2 bg-[#095EAE] text-[#FFF] font-semibold rounded-lg">Upload New Photo</button>
                            <button onClick={resetProfilePicture} className="px-4 py-2 border-2 border-[#095EAE] bg-[#FFF] text-[#095EAE] font-semibold rounded-lg">Remove Photo</button>
                        </div>
                        <input type="file" id="fileInput" accept="image/*" style={{display: 'none'}} onChange={handleImageUpload}/>
                    </div>
                </div>

                {/* Personal Information */}
                <div>
                    <h2 className="text-[20px] font-semibold mb-4">Personal Information</h2>
                    <div className="-mt-2 grid grid-cols-3 gap-1">
                        {[{label: 'First Name', value:'firstName'}, {label: 'Last Name', value: 'lastName'}, {label: 'Username', value: 'username'}, {label: 'Phone Number', value: 'phone'}, {label: 'Email Address', value: 'email', type: 'email'},].map((field) => (
                            <div key={field.value} className="relative flex-1">
                                <input type={field.type || 'text'} name={field.value} value={user[field.value]} onChange={handleChange} onFocus={() => handleFocus(field.value)} onBlur={(e) => handleBlur(field.value, e.target.value)} className={`mt-1 p-4 w-[350px] h-[50px] border rounded-xl focus:outline-none focus:border-[#095EAE] ${focusedInput[field.value] ? 'border-[#095EAE]': 'border-[#A5CEEE]'}`} required />
                                <label className={`absolute left-2 duration-200 transition-all ${focusedInput[field.value] ? '-top-1 text-xs font-medium text-[#095EAE] px-1 bg-[#FFF]' : 'text-base top-4 text-[#A5CEEE]'}`} htmlFor={field.value}>{field.label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Address Details */}
                <div className="mt-5">
                    <h2 className="text-[20px] font-semibold mb-4">Address Details</h2>
                    <div className="-mt-2 grid grid-cols-3 gap-1">
                        {[{label: 'Region/Province', value: 'region'}, {label: 'City', value: 'city'}, {label: 'District', value: 'district'}, {label: 'Street Address', value: 'address'}].map((field) => (
                            <div key={field.value} className="relative flex-1">
                                <input type="text" name={field.value} onChange={handleChange} onFocus={() => handleFocus(field.value)} onBlur={(e) => handleBlur(field.value, e.target.value)} className={`mt-1 p-4 w-[350px] h-[50px] border rounded-xl focus:outline-none focus:border-[#095EAE] ${focusedInput[field.value] ? 'border-[#095EAE]' : 'border-[#A5CEEE]'}`} required></input>
                                <label className={`absolute left-2 duration-200 transition-all ${focusedInput[field.value] ? '-top-1 text-xs font-medium text-[#095EAE] px-1 bg-[#FFF]' : 'text-base top-4 text-[#A5CEEE]'}`} htmlFor={field.value}>{field.label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Info */}
                <div className="mt-5">
                    <h2 className="text-[20px] font-semibold mb-4">Payment Information</h2>
                    <div className="-mt-2 grid grid-cols-3 gap-1">
                        {[{label: 'Cardholder Name', value: 'cardName'}, {label: 'Card Number', value: 'cardNumber'}, {label: 'Expiration Date', value: 'expiration'}, {label: 'CVV', value: 'CVV'}].map((field) => (
                            <div key={field.value} className="relative flex-1">
                                <input type="text" name={field.value} onChange={handleChange} onFocus={() => handleFocus(field.value)} onBlur={(e) => handleBlur(field.value, e.target.value)} className={`mt-1 p-4 w-[350px] h-[50px] border rounded-xl focus:outline-none focus:border-[#095EAE] ${focusedInput[field.value] ? 'border-[#095EAE]' : 'border-[#A5CEEE]'}`} required></input>
                                <label className={`absolute left-2 duration-200 transition-all ${focusedInput[field.value] ? '-top-1 text-xs font-medium text-[#095EAE] px-1 bg-[#FFF]' : 'text-base top-4 text-[#A5CEEE]'}`} htmlFor={field.value}>{field.label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security */}
                <div className="mt-5">
                    <h2 className="text-[20px] font-semibold mb-4">Security</h2>
                    <div className="-mt-2 grid grid-cols-1 gap-5 items-center">
                        <div className="flex items-center w-[735px] space-x-4">
                            <div className="relative flex-1 mb-5">
                                <input type={passwordVisibility ? "text" : "password"} name="password" value={user.password} onChange={handleChange} onFocus={() => handleFocus('password')} onBlur={(e) => handleBlur('password', e.target.value)} className={`mt-1 p-4 w-full h-[50px] border rounded-xl focus:outline-none focus:border-[#095EAE] ${focusedInput.password ? 'border-[#095EAE]' : 'border-[#A5CEEE]'}`} required />
                                <label className={`absolute left-2 duration-200 transition-all ${focusedInput.password ? '-top-1 text-xs font-medium text-[#095EAE] px-1 bg-[#FFF]' : 'text-base top-4 text-[#A5CEEE]'}`} htmlFor="password">Password</label>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#A5CEEE]" onClick={() => setPasswordVisibility(!passwordVisibility)}>{passwordVisibility ? <FiEyeOff size={20} className="text-[#1E1E1E]"></FiEyeOff> : <FiEye size={20} className="text-[#1E1E1E]"/>}</div>
                            </div>
                            <button className="px-4 py-3 mb-4 text-[#FFF] bg-[#095EAE] hover:bg-opacity-80 font-semibold rounded-lg">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;