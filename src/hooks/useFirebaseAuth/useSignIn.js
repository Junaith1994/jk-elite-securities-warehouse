import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";

const useSignIn = () => {
    // Necessary States
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const SignInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed-In user
                const user = userCredential.user;
                return setUser(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    return [SignInWithEmailAndPassword, user, error];
}

export default useSignIn;