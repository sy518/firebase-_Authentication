// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR3u3yi6Jb-4VzyTOgahVT9P-t8tfCHns",
    authDomain: "loginfom-4c6d0.firebaseapp.com",
    projectId: "loginfom-4c6d0",
    storageBucket: "loginfom-4c6d0.firebasestorage.app",
    messagingSenderId: "763169042401",
    appId: "1:763169042401:web:a7f5241c3f531248cfeca0",
    measurementId: "G-5SCB9R7773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


let submit = document.getElementById("btn");
submit.addEventListener("click", function (event) {
    event.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            swal({
                title: "Good job!",
                text: "Log In Succesfuly",
                icon: "success",
            });
            // ..
            window.location.href="success.html";
            console.log("hello");
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal(errorMessage);
            // ..
        });
})