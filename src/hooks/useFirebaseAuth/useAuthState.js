import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase.init';
import { useEffect, useState } from "react";


const useAuthState = () => {
    // Necessary States
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
                setUser(user);
            }
            else {
                setLoading(false)
                setUser(null);
            }
        })
    }, [])

    return [user, loading, setLoading];
}

export default useAuthState;