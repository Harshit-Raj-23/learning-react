const Contact = () =>{
    return (
        <div className="flex justify-center items-center m-10">
            <div className="bg-white border rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="font-bold text-3xl mb-2 text-center text-gray-800">Contact Us</h1>
                <p className="text-gray-600 text-center mb-6">
                We'll get back to you as soon as possible.
                </p>

                <form className="space-y-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Name"
                    required
                />
                <input
                    type="email"
                    className="border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email"
                    required
                />
                <textarea
                    className="border border-gray-300 rounded-md w-full p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your query..."
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-md font-medium transition duration-200"
                >
                    Send Message
                </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;