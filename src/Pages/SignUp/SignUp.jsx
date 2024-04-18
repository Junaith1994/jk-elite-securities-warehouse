/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useSignUp from "../../hooks/useFirebaseAuth/useSignUp";

const SignUp = () => {
    // Input value ref
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('');

    // firebase custom hook for user Sign-up
    const [SignUpWithEmailAndPass, user, wrongPass, error] = useSignUp();
    console.log(user);
    // Handle form submit
    const handleFormSubmit = event => {
        // Preventing Default Submit
        event.preventDefault();
        // Input Field Value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;
        // console.log('Email:', email, 'Password:', password, 'Confirm-Password:', confirmPass);

        // Sign-Up With Email and Password
        SignUpWithEmailAndPass(email, password, confirmPass);
        
        // .then(user => {
        //     console.log(user);
        // })

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
                    Create Your Account
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
                                className="block w-full ps-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-100">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                ref={passwordRef}
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full ps-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-100">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                ref={confirmPassRef}
                                type="password"
                                autoComplete="confirm-password"
                                required
                                className="block w-full ps-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <p className="text-red-700 font-semibold">{wrongPass || error}</p>
                    <div className='login-btn rounded-md'>
                        <button
                            type="submit"
                            className="w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already Have an Account?{' '}
                    <NavLink to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default SignUp;