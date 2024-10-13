import { useState } from "react"

function TrackDelivery(){
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

    return(
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
    )
}

export default TrackDelivery