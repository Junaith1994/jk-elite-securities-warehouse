/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuthState from '../../hooks/useFirebaseAuth/useAuthState';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

const navigation = [
    { name: 'Products', to: '/manage-products' },
    { name: 'Features', to: '/' },
    { name: 'Marketplace', to: '/' },
    { name: 'Company', to: '/' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Firebase AuthState custom hook to get the currently signed in user
    const [user, loading] = useAuthState();
    console.log(user, loading);

    // Handle SignOut

    return (
        <header className="bg-black">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to='/' className="-m-1.5 p-1.5">
                        {/* <span className="sr-only"></span> */}
                        <img
                            className="w-1/2"
                            src="https://i.ibb.co/8NsDBpr/logo-no-background.png"
                            alt=""
                        />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/* Nav Items */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                {
                    user || loading ? <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <NavLink onClick={() => signOut(auth)} className="text-sm font-semibold leading-6 text-slate-50">
                            <button className='bg-red-700 hover:bg-red-900 rounded-md px-4 py-2'>Log-out</button>
                        </NavLink>
                    </div>
                        :
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <NavLink to="/login" className="text-sm font-semibold leading-6 text-slate-50">
                                <button className='btn-grad'>Login</button>
                            </NavLink>
                        </div>
                }
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <NavLink to='/' className="-m-1.5 p-1.5">
                            {/* <span className="sr-only"></span> */}
                            <img
                                className="w-1/2"
                                src="https://i.ibb.co/8NsDBpr/logo-no-background.png"
                                alt=""
                            />
                        </NavLink>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-slate-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Header;