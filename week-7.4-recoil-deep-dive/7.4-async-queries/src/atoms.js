import { atom, selector } from "recoil";
import  axios  from "axios";

//Asynchronous data queries
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            //await new Promise(r => setTimeout(r, 5000)); // sleeps for 5 seconds -> add a loader here instead
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})