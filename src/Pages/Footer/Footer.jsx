import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black text-white text-center py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="space-y-4 text-start">
                        <img className="md:w-52 w-full" src="https://i.ibb.co/0m2jXSC/logo-no-background.png" alt="" />
                    </div>
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Company</h2>
                        <NavLink to='/' className="block hover:text-gray-400">Home</NavLink>
                        <NavLink to='' className="block hover:text-gray-400">About Us</NavLink>
                        <NavLink to='' className="block hover:text-gray-400">Blogs</NavLink>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Resources</h2>
                        <NavLink href='#inventories' className="block hover:text-gray-400">Products</NavLink>
                        <NavLink to='https://log.logcluster.org/warehouse-safety-and-security' target="_blank" className="block hover:text-gray-400">Warehouse safety and security</NavLink>
                        <NavLink to='https://www.sourcesecurity.com/tags/healthcare-security.html?ref=navbox' target="_blank" className="block hover:text-gray-400">Health care security products</NavLink>
                        <NavLink to='https://www.sourcesecurity.com/companies/security-manufacturers/directory.html?ref=nav' target="_blank" className="block hover:text-gray-400">Manufacturers</NavLink>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <address>Moinna Para, Barrister Sultan R/A, Boropol, Chittagong</address>
                        <p><span className="font-semibold mx-3">Cell:</span>+880-1627676315</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;