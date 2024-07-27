import Header from "../../Components/Header";
import { useState } from "react";
import {FaInstagram, FaTwitter, FaFacebook, FaWhatsapp} from 'react-icons/fa'

function ContactUs(){
    const [focusedInput, setFocusedInput] = useState({name: false, email: false, subject: false, message:false})

    const handleFocus = (field) => {
        setFocusedInput((previousState) => ({...previousState, [field]: true})) 
    }

    const handleBlur = (field, value) => {
        if(!value){
            setFocusedInput((previousState) => ({...previousState, [field]: false}))
        }
    }

    return(
        <div>
            <Header />
            <main>
            <div className="flex h-3/4 items-center justify-between p-6 bg-white">

                <div className="flex-1 max w-w-3/4 pr-6">
                    <h1 className="text-[80px] font-extrabold font-serif ml-10 text-[#24619D] fade-in-slide-up">
                        <span className="wave">CONTACT</span> <span className="wave" style={{animationDelay: '0.1s'}}>US</span>
                    </h1>
                    <h2 className="text-3xl font-semibold font-serif mt-2 ml-10 text-[#7BA5C9] fade-in-slide-up">Reliable Water, Anytime, Anywhere</h2>
                </div>

                <div className="flex-1 max-w-1/4 flex justify-center">
                    <img src="/assets/ContactUs.jpg" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 mt-10 bg-[#DDE9F5]">
                <h1 className="text-4xl font-bold text-[#24619D] mb-4 text-center">We are here to help you with all your hydration needs.</h1>
                <p className="text-lg text-center max-w-3xl">Whether you have questions about our products, need support, or just want to learn more about Aquaverse, reach out to us anytime. Our team is committed to providing you with the best service and solutions.</p>
            </div>

            <div className="bg-white p-8 mx-4 lg:mx-20 fade-in-slide-up flex flex-col my-10">
            <h2 className="text-center text-6xl font-extrabold text-[#24619D] mb-8">Get In Touch</h2>
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="flex-1 mr-8 mb-8 lg:mb-0">
                        <form className="space-y-4">
                            <div className="relative">
                                <input id="name" name="name" type="text" className={`w-full p-4 border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.name ? 'border-[#24619D]' : 'border-[#7BA5C9]'}`} required onFocus={() => handleFocus('name')} onBlur={(e) => handleBlur('name', e.target.value)}></input>
                                <label className={`absolute left-2 transition-all duration-200 ${focusedInput.name ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="name">Name</label>
                            </div>

                            <div className="relative">
                                <input id="email" name="email" type="email" className={`w-full p-4 border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.email ? 'border-[#24619D]' : 'border-[#7BA5C9]'}`} required onFocus={() => handleFocus('email')} onBlur={(e) => handleBlur('email', e.target.value)}/>
                                <label className={`absolute left-2 transition-all duration-200 ${focusedInput.email ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="email">Email</label>
                            </div>

                            <div className="relative">
                                <input id="subject" name="subject" type="text" className={`w-full p-4 border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] ${focusedInput.subject ? 'border-[#24619D]' : 'border-[#7BA5C9]'}`} required onFocus={() => handleFocus('subject')} onBlur={(e) => handleBlur('subject', e.target.value)}/>
                                <label className={`absolute left-2 transition-all duration-200 ${focusedInput.subject ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="subject">Subject</label>
                            </div>

                            <div className="relative">
                                <textarea id="message" name="message" className={`w-full p-4 border border-[#7BA5C9] rounded-lg focus:outline-none focus:border-[#24619D] h-32 resize-none ${focusedInput.message ? 'border-[#24619D]' : 'border-[#7BA5C9]'}`} required onFocus={() => handleFocus('message')} onBlur={(e) => handleBlur('message', e.target.value)}></textarea>
                                <label className={`absolute left-2 transition-all duration-200 ${focusedInput.message ? '-top-1 text-xs text-[#24619D] px-1 bg-white' : 'text-base top-4 text-[#7BA5C9]'}`} htmlFor="message">Write your message here...</label>
                            </div>

                            <button type="submit" className="w-[400px] p-3 items-center justify-center bg-[#24619D] text-white font-bold rounded-lg hover:bg-[#1d4a7b] transition">Send Message</button>
                        </form>
                    </div>

                    
                    <div className="w-full lg:w-1/3 space-y-4">
                        <div className="flex justify-between space-x-4">

                            <div className="flex items-center ">
                                <img src="/assets/call-us.png" alt="Call Us" className="h-22 w-20" />
                                <div>
                                    <p className="font-extrabold font-serif text-[#24619D] text-2xl">Call Us</p>
                                    <p className="font-bold">+233 50 098 8908</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img src="/assets/location.png" alt="Location" className="h-22 w-20" />
                                <div>
                                    <p className="font-extrabold font-serif text-[#24619D] text-2xl">Location</p>
                                    <p className="font-bold">Pantang, Accra</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-between space-x-4'>

                        <div className="flex items-center ">
                            <img src="/assets/website.png" alt="Website" className="h-22 w-20" />
                            <div>
                                <p className="font-extrabold font-serif text-[#24619D] text-2xl">Website</p>
                                <p className="font-bold ">www.aquaverse.com</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <img src="/assets/email.png" alt="Email" className="h-22 w-20 ml-9" />
                            <div>
                                <p className="font-extrabold font-serif text-[#24619D] text-2xl">Email</p>
                                <p className="font-bold">aquaverse@gmail.com</p>
                            </div>
                        </div>

                    </div>



                    <div>
                        <p className="font-extrabold font-serif text-2xl mb-2 text-[#24619D]">Follow Us On</p>
                        <div className="flex space-x-2">
                            <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                                <FaInstagram className='text-[#24619D] text-2xl ml-3 mt-3'></FaInstagram>
                            </div>

                            <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                                <FaTwitter className='text-[#24619D] text-2xl ml-3 mt-3'></FaTwitter>
                            </div>

                            <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                                <FaWhatsapp className='text-[#24619D] text-2xl ml-3 mt-3'></FaWhatsapp>
                            </div>

                            <div className="h-12 w-12 bg-[#CDD6DD] rounded-full items-center justify-center">
                                <FaFacebook className='text-[#24619D] text-2xl ml-3 mt-3'></FaFacebook>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </main>
        </div>

    )
}

export default ContactUs