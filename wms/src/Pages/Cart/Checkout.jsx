import { NavLink } from "react-router-dom";

function Checkout() {
    return (
        <div className="lg:w-full bg-[#DDE9F5] p-6 rounded-xl space-y-6">
            <h2 className="text-[28px] lg:text-[36px] font-extrabold text-[#095EAE] mb-4">Almost there!</h2>
            
            <div className="space-y-6">
                {/* Payment Method Section */}
                <div>
                    <h3 className="font-semibold text-lg lg:text-xl mb-2">Payment method</h3>
                    <label className="block mt-2">
                        <input type="radio" name="payment" className="mr-2" />Payment On Delivery
                    </label>
                    <label className="block mt-2">
                        <input type="radio" name="payment" className="mr-2" />Credit Card
                    </label>
                    <label className="block mt-2">
                        <input type="radio" name="payment" className="mr-2" />Mobile Money
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
                <NavLink to="/checkout">
                    <button className="w-full py-3 bg-[#24619D] text-white font-bold rounded">Order Now</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Checkout;
