import { useState } from "react"
import Sidebar from "../../Components/Sidebar"

function Notifications(){
    const [notifications, setNotifications] = useState({promotions: true, orderUpdates: true})

    const toggeleNotification = (type) => {
        setNotifications((previousNotifications) => ({...previousNotifications, [type]: !previousNotifications[type]}))
    }

    return(
        <div className="flex h-screen bg-[#FFF]">
            <Sidebar/>

            <div className="flex-1 p-10 ml-[20%]">
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        {/* Promotions text */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#095EAE]">Promotions</h3>
                            <p className="text-[#757575]">Never miss out on our latest promotions and water deals—stay refreshed and save effortlessly!</p>
                        </div>
                        {/* toggle switch */}
                        <div>
                            <label className="switch">
                                <input type="checkbox" checked={notifications.promotions} onChange={() => toggeleNotification('promotions')}></input><span className="slider round"></span>
                            </label>
                        </div>
                    </div>


                    <div className="flex items-center justify-between">
                        {/* Promotions text */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#095EAE]">Order Updates</h3>
                            <p className="text-[#757575]">Get real-time updates on your orders—stay in the loop and know exactly when your water will arrive!</p>
                        </div>
                        {/* toggle switch */}
                        <div>
                            <label className="switch">
                                <input type="checkbox" checked={notifications.orderUpdates} onChange={() => toggeleNotification('orderUpdates')}></input><span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications