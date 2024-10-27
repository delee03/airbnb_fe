import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkAtlHlZUYWjs2L2DsPtjX6IKlMXcgyr0",
    authDomain: "airbnb-clone-6cd32.firebaseapp.com",
    projectId: "airbnb-clone-6cd32",
    storageBucket: "airbnb-clone-6cd32.appspot.com",
    messagingSenderId: "721952790690",
    appId: "1:721952790690:web:58ea36d79659a4d9255ffb",
    measurementId: "G-ZEPWBFRXS5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const facebookProvider = new FacebookAuthProvider();

export const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);

            // Chuyển hướng về trang chủ
            window.location.href = "http://localhost:5173/";
        })
        .catch((error) => {
            console.error("Error signing in with Facebook:", error);
        });
};
