import Link from "next/link";


const Login = () => {

   


    return (
        <div className="w-full">
            <div className="flex items-center justify-center">

                <form
                    className=" bg-white  p-10  flex flex-col border m-20  rounded-md">
                    <h1 className="text-2xl font-semibold mb-6">Log in</h1>


                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                    />

                    <input
                        required
                        type="password"
                        placeholder="Password"
                        className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                    />


                    <button
                        // type="submit"
                        className="text-lg  w-full m-2 bg-gray-700  font-semibold text-white px-6 py-2 rounded">
                        Log in
                    </button>

                    <div className="flex justify-center">
                        <span>Don't have an account?</span>
                        <Link href="/signup" >
                            <a className="underline focus:outline-none text-center text-indigo-400 font-semibold mx-2">Signup</a>
                        </Link>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Login;