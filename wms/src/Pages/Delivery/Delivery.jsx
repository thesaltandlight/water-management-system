import Header from "../../Components/Header";
import { useState } from "react";

function Delivery() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingResult, setTrackingResult] = useState(null); // To store the tracking result

    const handleTrackDelivery = (e) => {
        e.preventDefault();
        // Simulate tracking with a mock response. You would replace this with a real API call.
        if (trackingNumber === '12345') {
            setTrackingResult({
                status: 'In Transit',
                estimatedDelivery: 'Tomorrow, 12:00 PM'
            });
        } else {
            setTrackingResult({
                status: 'Not Found',
                estimatedDelivery: null
            });
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-white">
                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/Delivery.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>

                    <div className="flex-1 max w-w-3/4 pr-6">
                        <h1 className="text-[60px] font-extrabold font-serif text-[#24619D] fade-in-slide-up">
                            <span className="wave">DELIVERY</span> <span className="wave" style={{animationDelay: '0.1s'}}>SERVICES</span>
                        </h1>
                        <h2 className="text-3xl font-semibold font-serif mt-2  text-[#7BA5C9] fade-in-slide-up">Receive your water on time, every time.</h2>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center p-8 mt-10 bg-[#DDE9F5]">
                    <h1 className="text-4xl font-bold text-[#24619D] mb-4 text-center">Reliability • Efficiency • Time consciousness</h1>
                    <p className="text-lg text-center max-w-3xl">At Aquaverse, we pride ourselves on our reliable and efficient delivery services. We understand that timely water delivery is crucial for your daily needs, and we strive to ensure that you receive your water exactly when you need it.</p>
                </div>

                {/* Delivery Tracking Section */}
                <div className="w-11/12 mx-auto mt-10">
                    <h2 className="text-4xl font-bold text-center text-[#24619D] mb-6">Track Your Delivery</h2>
                    <form onSubmit={handleTrackDelivery} className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg">
                        <label htmlFor="trackingNumber" className="block text-xl font-semibold mb-2 text-[#24619D]">Enter Your Tracking Number:</label>
                        <input
                            type="text"
                            id="trackingNumber"
                            value={trackingNumber}
                            onChange={(e) => setTrackingNumber(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                            placeholder="Enter tracking number"
                            required
                        />
                        <button type="submit" className="w-full py-3 bg-[#24619D] text-white font-bold rounded hover:bg-[#1c4c76]">Track Delivery</button>
                    </form>

                    {/* Display Tracking Result */}
                    {trackingResult && (
                        <div className="max-w-xl mx-auto mt-6 bg-[#DDE9F5] p-6 rounded shadow-lg">
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
            </main>
        </div>
    );
}

export default Delivery;
