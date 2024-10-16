import { useState } from 'react';
import {FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaEnvelope, FaExclamation} from 'react-icons/fa'

function ContactUs() {
  const [formData, setFormData] = useState({name: '', email:'', subject:"", message: ""})
  const [focusedInput, setFocusedInput] = useState({name: false, email: false, subject: false, message: false});
  const [popUp, setPopUp] = useState(false)
  const [error, setError] = useState(false)

  const handleFocus = (field) => {
    setFocusedInput((previousState) => ({...previousState, [field]: true}));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocusedInput((previousState) => ({...previousState, [field]: false}));
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    if(name === 'email') {
      setError({...error, emailInvalid: false})
    }
  }
  
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()

    const isEmailValid = validateEmail(formData.email)

    if(formData.name && formData.email && formData.subject && formData.message && isEmailValid){
      setError({general: false, emailInvalid: false})
      setPopUp(true)
      setTimeout(() => {
        setPopUp(false)
    }, 2000)
  } else {
    setError({general: !(formData.name && formData.email && formData.subject && formData.message), emailInvalid: !isEmailValid})
  }
    }
    

  return (
    <div className="bg-[#FFFFFF] p-8 mx-4 lg:mx-20 fade-in-slide-up flex flex-col my-10">
      <h2 className="text-center text-6xl font-bold text-[#095EAE] mb-8">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex-1 mr-8 mb-8 lg:mb-0">
          <form className="space-y-4">
            <div className="relative">
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className={`w-full p-4 border border-[#7BA5C9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.name || formData.name ? 'border-[#095EAE]' : 'border-[#7BA5C9]'} ${error.general && !formData.name ? 'border-[#E93737]' : ''}`} required onFocus={() => handleFocus('name')} onBlur={(e) => handleBlur('name', e.target.value)}></input>
              <label className={`absolute left-2 transition-all duration-200 ${focusedInput.name || formData.name ? '-top-2 text-xs text-[#095EAE] px-1 bg-[#FFFFFF]' : 'text-base top-4 text-[#7BA5C9]'} ${error.general && !formData.name && !focusedInput.name && !formData.name ? 'text-[#E93737]' : ''}`} htmlFor="name">Name</label>
            </div>

            <div className="relative">
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={`w-full p-4 border border-[#7BA5C9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.email || formData.email ? 'border-[#095EAE]' : 'border-[#7BA5C9]'} ${error.general && !formData.email ? 'border-[#E93737]' : ''} ${error.emailInvalid ? 'border-[#E93737]' : ''}`} required onFocus={() => handleFocus('email')} onBlur={(e) => handleBlur('email', e.target.value)}/>
              <label className={`absolute left-2 transition-all duration-200 ${focusedInput.email || formData.email ? '-top-2 text-xs text-[#095EAE] px-1 bg-[#FFFFFF]' : 'text-base top-4 text-[#7BA5C9]'} ${error.general && !formData.email && !focusedInput.email && !formData.email ? 'text-[#E93737]' : ''}`} htmlFor="email">Email</label>
            </div>

            <div className="relative">
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className={`w-full p-4 border border-[#7BA5C9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.subject || formData.subject ? 'border-[#095EAE]' : 'border-[#7BA5C9]'} ${error.general && !formData.subject ? 'border-[#E93737]' : ''}`} required onFocus={() => handleFocus('subject')} onBlur={(e) => handleBlur('subject', e.target.value)}/>
              <label className={`absolute left-2 transition-all duration-200 ${focusedInput.subject || formData.subject ? '-top-2 text-xs text-[#095EAE] px-1 bg-[#FFFFFF]' : 'text-base top-4 text-[#7BA5C9]'} ${error.general && !formData.subject && !focusedInput.subject && !formData.subject ? 'text-[#E93737]' : ''}`} htmlFor="subject">Subject</label>
            </div>
            
            <div className="relative">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`w-full p-4 border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] h-32 resize-none ${focusedInput.message || formData.message ? 'border-[#095EAE]' : 'border-[#7BA5C9]'} ${error.general && !formData.message ? 'border-[#E93737]' : ''}`} required onFocus={() => handleFocus('message')} onBlur={(e) => handleBlur('message', e.target.value)}></textarea>
              <label className={`absolute left-2 transition-all duration-200 ${focusedInput.message || formData.message ? '-top-2 text-xs text-[#095EAE] px-1 bg-[#FFFFFF]' : 'text-base top-4 text-[#7BA5C9]'} ${error.general && !formData.message && !focusedInput.message && !formData.message ? 'text-[#E93737]' : ''}`} htmlFor="message">Write your message here...</label>
            </div>

            {error && <p className='text-[#E93737] flex items-center'><FaExclamation className='text-[#E93737] mr-2'></FaExclamation>Uh oh! You missed a spot. Please fill in all fields and try again</p>}

            <button type="submit" onClick={handleSendMessage} className="w-[400px] p-3 items-center justify-center bg-[#095EAE] text-[#FFFFFF] font-bold rounded-lg hover:bg-[#1d4a7b] transition">Send Message</button>
          </form>
          
          {popUp && (
            <>
            {/* background */}
            <div className='fixed inset-0 bg-[#000000] opacity-50 z-40'></div>
            {/* popup */}
            <div className='fixed inset-0 flex items-center justify-center z-50'>
              <div className='bg-[#FFFFFF] text-[#095EAE] py-16 px-24 rounded-xl text-3xl font-semibold flex flex-col items-center justify-center w-1/2 h-1/2'>
              <FaEnvelope className='text-[#095EAE] text-9xl animate-bounce mb-8'></FaEnvelope>
              Thank you for your feedback!
              </div>
            </div>
            </>
          )}
        </div>



        <div className="w-full lg:w-1/3 space-y-4">
          <div className="flex justify-between space-x-4">

            <div className="flex items-center ">
              <img src="/assets/call-us.png" alt="Call Us" className="h-22 w-20" />
              <div>
                <p className="font-bold text-[#095EAE] text-2xl">Call Us</p>
                <p className="font-bold">+233 50 098 8908</p>
              </div>
            </div>

            <div className="flex items-center">
              <img src="/assets/location.png" alt="Location" className="h-22 w-20" />
              <div>
                <p className="font-bold text-[#095EAE] text-2xl">Location</p>
                <p className="font-bold">Pantang, Accra</p>
              </div>
            </div>

          </div>

        <div className='flex justify-between space-x-4'>

          <div className="flex items-center ">
            <img src="/assets/website.png" alt="Website" className="h-22 w-20" />
            <div>
              <p className="font-bold text-[#095EAE] text-2xl">Website</p>
              <p className="font-bold ">www.aquaverse.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <img src="/assets/email.png" alt="Email" className="h-22 w-20 ml-9" />
            <div>
              <p className="font-bold text-[#095EAE] text-2xl">Email</p>
              <p className="font-bold">aquaverse@gmail.com</p>
            </div>
          </div>

        </div>
        
          <div>
            <p className="font-bold text-2xl mb-2 text-[#095EAE]">Follow Us On</p>
            <div className="flex space-x-2">
              <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                <FaInstagram className='text-[#095EAE] text-2xl ml-3 mt-3'></FaInstagram>
              </div>
              <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                <FaTwitter className='text-[#095EAE] text-2xl ml-3 mt-3'></FaTwitter>
              </div>
              <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                <FaWhatsapp className='text-[#095EAE] text-2xl ml-3 mt-3'></FaWhatsapp>
              </div>
              <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                <FaFacebook className='text-[#095EAE] text-2xl ml-3 mt-3'></FaFacebook>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
