/* eslint-disable react/no-unescaped-entities */

const Blogs = () => {
    return (
        <div className="p-5">
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
                            <th className="border border-slate-600">When Should Use Node.js ?</th>
                            <th className="border border-slate-600">When Should Use MongoDB ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border border-slate-700">
                                First we need to understand how node.js actually works? <br /> Node.js is a javaScript runtime environment which allows javaScript to be run on server side application. It <b>uses event-driven non-blocking I/O calls which supports thousands of connections simultaneously.</b> Means when user requests are comming to node server it doesn't block the thread and keeps processing the user requests simultaneously. In this process the V8 engine of javaScript which was developed by google to speed up the javaScript code conversion into machine readable code which provides faster execution of code and deliver a fastest response to the requests. Thus the V8 engine is evolving to speed up web and node.js environment. <br /> Now comming to the question <b>when should use node.js ? </b> There are two types of application based on their behavior - 1. I/O intensive  2. CPU intensive <br /> <b>1. I/O intensive:</b> These applications perform mostly Input/Output operations. For example: Database access, file reading and writing, responding to HTTP requests and so on. This kind of operations don't block the main thread. The main event loop only focuses on handling the events and not the associated operations, making the response time very fast. <br /> <b>2. CPU intensive:</b> These applications require large amount of cpu cycles for their operations. For example : Heavy mathematical calculations, data crunching , Image processing ,etc. CPU intensive applications are best suited for multi threaded systems. When you make a CPU intensive application with node.js which is single threaded, then it will execute all the CPU intensive task in one thread and <b>this will make it very slow.</b> For example if you make an image processing app with node.js then you will very disapointed at the speed. <br /> Due to the way NodeJS works we can come to the conclusion that : <br />
                                <li><b>Potential I/O intensive application </b> - Node JS might be the best choice.</li>
                                <li><b>Potential CPU intensive application </b> - Node JS will be very slow.</li> <br /> As most of the applications are not CPU intensive commonly So you can use Node.js but it still depends on the requirements of the application.
                            </td>
                            <td className="p-2 border border-slate-700">
                                MongoDB is a noSQL database. It stores data in BSON, a Binary JSON format. It is designed for high-volume data storage
                                and can process large amounts of real-time data very quickly.
                                It is also designed to be simple and fast for developers and
                                makes it easy to query and analyse data. <br /> If you need to store large amounts of unstructured data which will scale over time then noSQL database like mongodb would be best choice. Here are more reasons when should you choose mongodb as your database : <br /> <br />
                                <li>When you need high availability of data with auto fast and instant recovery.</li>
                                <li>If most of your services are cloud based, then mongodb would be a best choice.</li>
                                <li>If you want fast and rapid development of your database.</li>
                                <li>If you don't need any prior database administrator, then mongodb again would be the best choice for your database management.</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Q3: What is the purpose of JWT and how does it work ? */}
            <div className="my-5">
                <h3 className="text-slate-100 text-2xl font-semibold mb-5">Q3: What is the purpose of JWT and how does it work ?</h3>
                <p className="text-slate-100">
                    <b>JWT or JSON web token</b> is an open standard (RFC 7519) which defines a compact system of transmitting informations securely between parties as a JSON object. The informations can be easily verified with the signed token by the client when the client wants to access them later on. The <b>purpose of using JWT is the secure transmission of data between the parties based on the signed-in tokens which is created with a secret key(with the HMAC algorithom) or the private/public key pairs. The signature also certifies that only the party holding the private key is the one that signed it. </b> <br /> <br /> <span className="text-xl font-semibold">How JWT works :</span> 
                    When a user login with google or any other authentication system the token is generated from the server-side for that particular client, and send to the client-side in response. This token includes client email also. After receiving in client side one can store the token in localStorage or in sessionStorage. <br /> Now when a user send any request for the protected information then the storedToken is sent from the client-side in headers to the server. Once the request from client-side received in server-side then the JWT token verifier function try to retrieve client's signed-in token from the associated headers and verify this well. After successfull verification, the server response with 200 (Ok) to the client-side and then client is allowed to consume the content.
                </p>
            </div>
        </div>
    );
};

export default Blogs;