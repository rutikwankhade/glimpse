import Link from "next/link";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { registerUser } from "../app/features/authSlice";

const SignUp = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const handleUserLogin = (e) => {
        e.preventDefault();
        // console.log({
        //     username: "rutikw",
        //     email: "rutikw@gmail.com",
        //     password:"12345"
        // })
        dispatch(registerUser({
            username: "rutik24",
            email: "rutik24@gmail.com",
            password: "12345"
        }))



    }

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div className="w-full">
            <div className="flex items-center justify-center">

                <form onSubmit={handleSubmit(onSubmit)}
                    className=" bg-white  p-10  flex flex-col border m-20  rounded-md">
                    <h1 className="text-2xl font-semibold mb-6">Sign up</h1>


                    <input
                        type="text"
                        placeholder="name"
                        className="text-lg m-2 bg-gray-100 py-2 px-4 w-full rounded"
                        {...register("username")}


                    />


                    <input
                        type="email"
                        placeholder="Email"
                        className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                        {...register("email")}

                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                        {...register("password", { required: true, min: 8 })}

                    />



                    <button
                        type="submit"
                        className="text-lg  w-full m-2 bg-gray-700  font-semibold text-white px-6 py-2 rounded">Sign up
                    </button>

                    <div className="flex justify-center">
                        <span>Already a user?</span>
                        <Link href="/login" >
                            <a className="underline focus:outline-none text-center text-indigo-400 font-semibold mx-2">Login</a>

                        </Link>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default SignUp;