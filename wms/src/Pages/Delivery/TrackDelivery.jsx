import { useState } from "react";

function TrackDelivery (){
    const [trackingNumber, setTrackingNumber] = useState('')
    const [trackingResult, setTrackingResult] = useState(null)
    const [focusedInput, setFocusedInput] = useState({trackingNumber: false})

    const handleTrackDelivery = (e) => {
        e.preventDefault()
        //mock API
        if (trackingNumber === '12345') {
            setTrackingResult({status: 'In Transit', estimatedDelivery: 'Tomorrow, 12:00 PM',});
          } else {
            setTrackingResult({status: 'Not Found', estimatedDelivery: null,});
          }
        };

        const handleFocus = () => {
            setFocusedInput({ trackingNumber: true });
        };

        const handleBlur = (value) => {
            if (!value) {
                setFocusedInput({ trackingNumber: false });
            }
        };

        return (
            <div className="w-full h-full flex flex-col justify-center items-center mt-10">
                <div className="mb-6 text-center">
                    <h3 className="text-xl font-semibold text-[#B1C7D9] fade-in-slide-up" style={{ fontFamily: 'Brush Script MT, cursive' }}>Fast & Reliable Water Delivery</h3>
                    <h1 className="text-6xl mb-1 font-bold text-[#095EAE] fade-in-slide-up">Track Your Delivery</h1>
                    <p className="text-lg font-normal">Stay informed every step of the way—track your delivery in real-time for added convenience and peace of mind!</p>
                </div>
                
                <form onSubmit={handleTrackDelivery} className="w-full max-w-screen-xl mx-auto flex justify-center mb-6">
                    <div className="relative w-3/4">
                        <input id="trackingNumber" name="trackingNumber" type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} onFocus={handleFocus} onBlur={(e) => handleBlur(e.target.value)} className={`p-4 w-full border border-[#B1C7D9] rounded-xl focus:outline-none focus:border-[#24619D] ${focusedInput.trackingNumber ? 'border-[#24619D]' : 'border-[#7BA5C9]'}`} required/>
                        <label className={`absolute left-4 duration-200 transition-all ${focusedInput.trackingNumber? '-top-2 text-xs font-medium text-[#165A9A] px-1 bg-[#FFFFFF]': 'text-base top-4 text-[#B1C7D9]'}`} htmlFor="trackingNumber">Enter Your Tracking Number</label>
                    </div>
                    <button type="submit" className="ml-4 py-3 px-6 bg-[#095EAE] text-[#FFFFFF] font-bold rounded-xl hover:bg-[#7BA5C9] transition-all">Track Order</button>
                </form>
                
                {/* Displays Tracking Result */}
                {trackingResult && (
                    <div className="max-w-md mx-auto mt-6 bg-[#DDE9F5] p-6 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-center text-[#24619D]">Tracking Status: {trackingResult.status}</h3>
                        {trackingResult.estimatedDelivery && (
                            <p className="text-lg text-center mt-4">Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                        )}
                        
                        {trackingResult.status === 'Not Found' && (
                            <p className="text-lg text-center mt-4 text-red-500">No delivery found for the provided tracking number.</p>
                        )}
                    </div>
                )}
            </div>
        );
    }

export default TrackDelivery