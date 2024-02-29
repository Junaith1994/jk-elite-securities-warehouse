import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import { useState } from "react";

const usePasswordResetEmail = () => {
    // Necessary states
    const [resetError, setResetError] = useState('');

    const passwordResetEmail = (email) => {
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast("Password Reset Email Sent")
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setResetError(errorMessage);
                })
        }
        else {
            toast("Please Provide Your Email !!")
        }
    }

    return [passwordResetEmail, resetError];
}

export default usePasswordResetEmail;