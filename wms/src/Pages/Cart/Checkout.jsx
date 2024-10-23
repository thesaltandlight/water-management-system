import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Checkout() {
    const [selectedMethod, setSelectedMethod] = useState('')
    const [popUp, setPopUp] = useState(false)

    const handlePaymentChange = (event) => {
        setSelectedMethod(event.target.value)
    }

    const handleOrderNow = () => {
        setPopUp(true);
        setTimeout(() => {
            setPopUp(false)
        },1700)
    }

    return (
        <div className="lg:w-full bg-[#DDE9F5] p-6 rounded-xl h-[700px]">
            <h2 className="text-[28px] lg:text-[36px] font-extrabold text-[#095EAE] mb-4">Almost there!</h2>
            
            <div className="-mt-2">
                {/* Payment Method Section */}
                <div className="relative">
                    <h3 className="font-normal text-[15px] mb-2 text-[#757575]">Payment method</h3>
                    {/* payment on delivery */}
                    <label className={`block mt-2 ${selectedMethod === 'paymentOnDelivery' ? 'bg-[#FFF] p-4 rounded-xl w-full lg:w-96 z-10' : ''}`}>
                        <input type="radio" name="payment" value="paymentOnDelivery" className="mr-2" onChange={handlePaymentChange} checked={selectedMethod === 'paymentOnDelivery'} />Payment On Delivery
                            {selectedMethod === "paymentOnDelivery" && (
                                <p className="text-[12px] text-[#757575] mt-2">Please ensure you have adequate funds ready for payment when our couriers arrive to avoid any delays or issues.</p>  
                            )}
                    </label>
                    
                    {/* credit card */}
                    <label className={`block mt-2 ${selectedMethod === 'creditCard' ? 'bg-[#FFF] p-4 rounded-xl w-full lg:w-96 z-10' : ''}`}>
                        <input type="radio" name="payment" value="creditCard" className="mr-2" onChange={handlePaymentChange} checked={selectedMethod === 'creditCard'} />Credit Card
                        {selectedMethod === "creditCard" && (
                            <p className="text-[12px] text-[#757575] mt-2">Bleh Bleh</p> 
                        )}
                    </label>

                    {/* mobile money */}
                    <label className={`block mt-2 ${selectedMethod === 'mobileMoney' ? 'bg-[#FFF] p-4 rounded-xl w-full lg:w-96 z-10' : ''}`}>
                        <input type="radio" name="payment" value="mobileMoney" className="mr-2" onChange={handlePaymentChange} checked={selectedMethod === 'mobileMoney'} />Mobile Money
                        {selectedMethod === 'mobileMoney' && (
                            <p className="text-[12px] text-[#757575] mt-2">You will receive a prompt to enter your PIN and confirm the purchase right after placing your order.</p>
                        )}
                    </label>
                </div>

                {/* Billing Address Section */}
                <div>
                    <h3 className="font-semibold text-lg lg:text-xl mb-2">Billing Address</h3>
                    <p>Greater Accra, Accra, Pantang Junction, Adom Close No. 1</p>
                    <button className="w-full mt-2 py-2 bg-[#095EAE] text-[#FFF] rounded">Change Address</button>
                </div>

                {/* Contact Information Section */}
                <div>
                    <h3 className="font-semibold text-lg lg:text-xl mb-2">Contact Information</h3>
                    <p>Email: ewurafuquansash@gmail.com</p>
                    <p>Phone: 0500872524</p>
                    <button className="w-full mt-2 py-2 bg-[#7BA5C9] text-white rounded">Edit Contacts</button>
                </div>

                {/* Order Now Button */}
                    <button onClick={handleOrderNow} className="px-4 py-3 fixed bottom-14 right-20 bg-[#095EAE] text-white font-semibold rounded-xl">Order Now</button>

                    {popUp && (
                        <>
                        {/* Background */}
                        <div className="fixed inset-0 bg-[#000000] opacity-50 z-40"></div>
                        {/* PopUp */}
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-[#FFF] text-[#095EAE] py-16 px-24 rounded-xl text-3xl font-semibold flex flex-col items-center justify-center w-2/3 h-2/3 text-center">
                            <FaShoppingCart className="text-[#095EAE] text-[140px] animate-bounce mt-10 mb-20"/> 
                            Your order has been placed successfully. You will receive an email notification shortly.
                            </div>
                        </div>
                        </>
                    )}
            </div>
        </div>
    );
}

export default Checkout;
