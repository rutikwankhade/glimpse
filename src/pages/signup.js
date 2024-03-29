import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { registerUser, loginUser} from "../app/features/authSlice";


const SignUp = () => {


    const router = useRouter()

    const dispatch = useDispatch()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { isFetching, isAuthenticated, message,user } = useSelector((state) => state.auth);
   
    const onSubmit = (data) => {
        console.log(data);
        dispatch(registerUser(data))

    }


    const handleGuestLogin = () => {
        const data = {
            email: "jhondoe@gmail.com",
            password: "jhondoe123"
        }
        dispatch(loginUser(data))

    }



    useEffect(() => {
        if (isAuthenticated) {
            router.push('/bookclub');
        }

    }, [isAuthenticated,user]);


    return (
        <div className="w-full bg-fuchsia-50 h-screen">
            <div className="flex items-center justify-center">

                <form onSubmit={handleSubmit(onSubmit)}
                    className=" bg-white md:w-1/3 p-12 flex flex-col  md:m-20 m-4  rounded-xl shadow-xl">
                    <h1 className="text-2xl font-semibold mb-6 text-center">Create an account</h1>


                    <input
                        type="text"
                        placeholder="username"
                        className="text-lg m-2 bg-gray-100 py-2 px-4 w-full rounded"
                        {...register("username", { required: true })}
                    />
                    <span className="text-sm text-red-400 mx-2">
                        {errors.username && <span>name is required</span>}
                    </span>

                    <input
                        type="email"
                        placeholder="Email"
                        className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                        {...register("email", { required: true })}

                    />
                    <span className="text-sm text-red-400 mx-2">
                        {errors.email && <span>email is required</span>}
                    </span>

                    <input
                        type="password"
                        placeholder="Password"
                        className="text-lg m-2 bg-gray-100 px-4 py-2 w-full rounded"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "password is required"
                            }, minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}

                    />
                    <span className="text-sm text-red-400 mx-2">
                        {errors.password && <span>{errors.password.message}</span>}
                    </span>


                    <button
                        type="submit"
                        className="text-lg  w-full m-2 bg-gray-700  font-semibold text-white px-6 py-2 rounded-full ">
                       <span className="transform  hover:translate-x-4 duration-300">{isFetching ? 'Signing up' : 'Sign up '} &rarr;</span> 

                    </button>

                    <div className="flex justify-center">
                        <span>Already a user?</span>
                        <Link href="/login" >
                            <a className="underline focus:outline-none text-center text-violet-500 font-semibold mx-2">Login</a>
                        </Link>

                    </div>

                    <button
                        onClick={()=>handleGuestLogin()}
                        className="m-4 bg-purple-400 mx-auto px-6 font-semibold text-md hover:bg-purple-500 text-white rounded-full p-2">Or Continue as a Guest</button>

                </form>

            </div>

        </div>
    );
}

export default SignUp;