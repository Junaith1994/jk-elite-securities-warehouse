import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSignIn = () => {
    // Necessary States and hooks
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const SignInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed-In user
                const user = userCredential.user;
                setUser(user);
                // Navigating user to the desired page
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    return [SignInWithEmailAndPassword, user, error];
}

export default useSignIn;