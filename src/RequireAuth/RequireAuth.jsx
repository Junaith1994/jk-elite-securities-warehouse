import { Navigate, useLocation } from 'react-router-dom';
import useAuthState from '../hooks/useFirebaseAuth/useAuthState';
// import useAuthState from '../hooks/useFirebaseAuth/useAuthState';

const RequireAuth = ({ children }) => {
    // Auth state custom hook
    const [user, loading] = useAuthState();
    let location = useLocation();
    // console.log(user, loading);
    if (loading) {
        return <div className=''>
            <svg className='bg-blue-800 text-center animate-ping h-10 w-10 mx-auto rounded-full' viewBox="0 0 24 24"></svg>
        </div>
    }

    return user ? children : <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default RequireAuth;