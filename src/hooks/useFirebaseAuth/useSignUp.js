import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { toast } from "react-toastify";

const useSignUp = () => {
    // Necessary States
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [wrongPass, setWrongPass] = useState('');

    const SignUpWithEmailAndPass = (email, password, confirmPass) => {
        password === confirmPass ? createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed-up user
                const user = userCredential.user;
                setWrongPass('');
                toast("Account Created Successfully")
                return setUser(user);
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