import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { loginUser } from "../app/features/authSlice";


const Login = () => {


    const router = useRouter()
    const dispatch = useDispatch()

    const { isFetching, message } = useSelector((state) => state.auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


     const onSubmit = (data) => {
        console.log(data);
        dispatch(loginUser(data))

    }


    useEffect(() => {
        if (isFetching) {
            router.push('/bookclub');
        }

    }, [isFetching]);

    return (
        <div className="w-full bg-yellow-50">
            <div className="flex items-center justify-center">

                <form onSubmit={handleSubmit(onSubmit)}
                    className=" bg-white shadow-xl w-3/12  p-12  flex flex-col border m-20  rounded-xl">
                    <h1 className="text-2xl font-semibold mb-6 text-center">Log in</h1>


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
                        {...register("password", { required: true })}

                    />
                    <span className="text-sm text-red-400 mx-2">
                        {errors.password && <span>password is required</span>}
                    </span>


                    <button
                        type="submit"
                        className="text-lg  w-full m-2 bg-gray-700  font-semibold text-white px-6 py-2 rounded-full">
                        {isFetching ? 'Signing in' : 'Log in'}

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