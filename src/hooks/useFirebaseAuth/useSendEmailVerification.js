import { sendEmailVerification } from "firebase/auth";
import { auth } from '../../firebase.init';
import { toast } from "react-toastify";

const useSendEmailVerification = () => {
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast("Email Verification Sent, Please Check Your Email");
            });
    }

    return [emailVerification];
}

export default useSendEmailVerification;