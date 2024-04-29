"use client"


const Error = ({ error, reset }) => {
    // useEffect(() => {
    //     // Log the error to an error reporting service
    //     console.error(error);
    // }, [error]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
                <p className="text-gray-700 mb-4">{error.message}</p>
                <button
                    onClick={reset}
                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                    Try again
                </button>
            </div>
        </div>
    );
};

export default Error;
