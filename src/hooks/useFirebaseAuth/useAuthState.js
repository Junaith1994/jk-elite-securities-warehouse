import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase.init';
import { useEffect, useState } from "react";


const useAuthState = () => {
    // Necessary States
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
            else {
                setUser(null);
            }
        })
    }, [])

    return [user, loading];
}

export default useAuthState;