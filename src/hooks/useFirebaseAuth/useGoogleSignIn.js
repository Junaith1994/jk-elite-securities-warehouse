import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const useGoogleSignIn = () => {
    // Necessary States and hooks
    const [googleUser, setGoogleUser] = useState({});
    const [googleError, setGoogleError] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // console.log(googleError);

    const googleSignIn = () => {
        // Google Auth Provider
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setGoogleUser(user);
                // Navigating user to the desired page
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setGoogleError(errorMessage);
            })
    }

    return [googleSignIn, googleUser, googleError];
}

export default useGoogleSignIn;