/* eslint-disable react/no-unescaped-entities */
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="bg-slate-950 p-5">
            <h1 className="text-center text-teal-500 font-bold my-10 text-4xl">Blog</h1>
            <div className="my-5">
                <h3 className="text-slate-100 text-2xl font-semibold mb-5">Q1: Differences between JavaScript and Node.js</h3>
                <table className="border-collapse border border-slate-100 text-slate-100 table-auto">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">JavaScript</th>
                            <th className="border border-slate-600">Node.js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript is a client-side scripting language.</td>
                            <td className="p-2 border border-slate-700">Node.js is a javaScript runtime environment</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript runs in browsers only.</td>
                            <td className="p-2 border border-slate-700">Node.js allowed javaScript to be run on server-side. It parse javaScript code and execute.</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript runs in all browsers.</td>
                            <td className="p-2 border border-slate-700">Node.js uses V8 engine to run javaScript.</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript is capable enough to add html tag and can play with DOM.</td>
                            <td className="p-2 border border-slate-700">Node.js can't add html tag neither it can play with DOM.</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript relies on external libraries and APIs for addtional functionalities.</td>
                            <td className="p-2 border border-slate-700">Node.js relies on many collections of libraries and modules to create server side applications.</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript is single threaded programming language. It focuses mainly on user interaction and DOM manupulation.</td>
                            <td className="p-2 border border-slate-700">Node.js is event driven. It is built with many libraries and modules which allows it to perform many concurrent operations and help developers to build scalable server-side applications.</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-slate-700">JavaScript is the latest version ECMA script. It's written in C++.</td>
                            <td className="p-2 border border-slate-700">Node.js is written in C, C++ and JavaScript.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Q2: When should use Node.js and when should use MongoDB ? */}
            <div>
                <h3 className="text-slate-100 text-2xl font-semibold mb-5">Q2: When should use Node.js and when should use MongoDB ?</h3>
                <table className="border-collapse border border-slate-500 text-slate-100 table-auto">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">Node.js</th>
                            <th className="border border-slate-600">MongoDB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-700">Node.js</td>
                            <td className="border border-slate-700">MongoDB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;