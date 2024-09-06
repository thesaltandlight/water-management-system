// Notifications.jsx
import Header from "../../Components/Header";
import { useNotifications } from "../Notifications/NotificationsContext";

function Notifications() {
    const { notifications, removeNotification, clearNotifications } = useNotifications();

    return (
        <div>
            <Header />
            <div className="w-11/12 mx-auto my-10">
                <h1 className="text-4xl font-bold text-[#24619D] mb-6">Notifications</h1>
                {notifications.length === 0 ? (
                    <p className="text-lg text-gray-500">No notifications available.</p>
                ) : (
                    <div>
                        {notifications.map(notification => (
                            <div key={notification.id} className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
                                <p className="text-md">{notification.message}</p>
                                <button 
                                    onClick={() => removeNotification(notification.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Dismiss
                                </button>
                            </div>
                        ))}
                        <button 
                            onClick={clearNotifications}
                            className="bg-[#24619D] text-white px-6 py-2 rounded mt-4"
                        >
                            Clear All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Notifications;
