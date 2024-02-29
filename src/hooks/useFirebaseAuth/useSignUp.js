import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { toast } from "react-toastify";
import useSendEmailVerification from "./useSendEmailVerification";

const useSignUp = () => {
    // Necessary States
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [wrongPass, setWrongPass] = useState('');
    // Send email verification custom hook
    const [emailVerification] = useSendEmailVerification();

    const SignUpWithEmailAndPass = (email, password, confirmPass) => {
        password === confirmPass ? createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed-up user
                const user = userCredential.user;
                setWrongPass('');
                toast("Account Created Successfully")
                setUser(user);
                emailVerification();
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            : setWrongPass("Passwords are not matching")
    }

    return [SignUpWithEmailAndPass, user, wrongPass, error];
}

export default useSignUp;