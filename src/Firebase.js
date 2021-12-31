import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBcll-VQ8YSHHlDctsj7UkVR4MpFyEhIBU",
    authDomain: "manager-booking.firebaseapp.com",
    databaseURL: "https://manager-booking-default-rtdb.firebaseio.com",
    projectId: "manager-booking",
    storageBucket: "manager-booking.appspot.com",
    messagingSenderId: "56342568564",
    appId: "1:56342568564:web:8986155ce653c93277fb21"
};


export const fireDB = initializeApp(firebaseConfig);