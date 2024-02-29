/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import './Login.css'
import { useRef } from 'react';
import useSignIn from '../../hooks/useFirebaseAuth/useSignIn';
import useGoogleSignIn from '../../hooks/useFirebaseAuth/useGoogleSignIn';

const Login = () => {
    // Input Field Value
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // Firebase Email-Password Sign-in custom hook 
    const [SignInWithEmailAndPassword, user, error] = useSignIn();
    // Firebase Google Sign-in with custom hook
    const [googleSignIn, googleUser] = useGoogleSignIn();
    // console.log(user);
    console.log(googleUser);
    const handleFormSubmit = event => {
        // Preventing Default Submit
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log('Email:', email, 'Password:', password);
        // Sign-in with email-password
        SignInWithEmailAndPassword(email, password);

        event.target.reset();
    }

    return (
        <div className="bg-gray-950 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-full"
                    src="https://i.ibb.co/8NsDBpr/logo-no-background.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100">
                    Sign-in to Your Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleFormSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                ref={emailRef}
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-100">
                                Password
                            </label>
                            <div className="text-sm">
                                <NavLink href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </NavLink>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                ref={passwordRef}
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <p className='text-red-800 font-semibold'>{error}</p>
                    <div className='login-btn rounded-md'>
                        <button
                            type="submit"
                            className="w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't Have an Account?{' '}
                    <NavLink to="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Create Account
                    </NavLink>
                </p>
                {/* Divider */}
                <div className='my-6 flex items-center'>
                    <div className='w-full h-0.5 rounded-md bg-slate-100'></div>
                    <div className='text-slate-100 mx-2 font-semibold'>Or</div>
                    <div className='w-full h-0.5 rounded-md bg-slate-100'></div>
                </div>
                <div onClick={() => googleSignIn()} className='bg-gray-100 rounded-lg shadow-md hover:shadow-gray-400 flex justify-between items-center'>
                    <img className='w-10' src="https://i.ibb.co/0DcJQL5/google-logo.png" alt="" />
                    <button
                        type="submit"
                        className="flex w-full justify-center px-3 py-1.5 text-2xl font-semibold leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;