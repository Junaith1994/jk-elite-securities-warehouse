import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase.init";

const useGoogleSignIn = () => {
    // Necessary States
    const [googleUser, setGoogleUser] = useState({});
    const [googleError, setGoogleError] = useState('');
    console.log(googleError);
    const googleSignIn = () => {
        // Google Auth Provider
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setGoogleUser(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                setGoogleError(errorMessage);
            })
    }

    return [googleSignIn, googleUser, googleError];
}

export default useGoogleSignIn;