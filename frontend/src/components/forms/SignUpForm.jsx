import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query'
import * as apiClient from "../../../api/api.js"
import { useAppContext } from "../../../context/AppContext.jsx";
function SignUpForm({ toggleModalVisible }) {

  const { showToast } = useAppContext()

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });

  const { mutate:registerUser } = useMutation({
    mutationFn: apiClient.register,
    onSuccess: (data) => {
      showToast({ message: data.message, type: "SUCCESS" })
      toggleModalVisible(false)
      console.log("Registration successful from mutation ", data)
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" })
      console.log("Error shown from mutation ", error)
    }
  })

  async function formSubmit(data) {
    registerUser(data)
  }
  return (
    <form
      method="post"
      onSubmit={handleSubmit(formSubmit)}
      className="flex flex-col m-auto items-center transition-all gap-10"
    >
      <h2 className="text-center font-raleway text-orange-600 text-4xl w-full pt-10">
        Create an account
      </h2>
      <div className="flex flex-col gap-7 w-full px-14">
        <label className="font-libre flex flex-col hover:text-orange-600 text-orange-600/70 focus-within:text-orange-600 text-2xl gap-2">
          First Name
          <input
            {...register("firstName", { required: "This field is required" })}
            type="text"
            className=" text-black focus-within:outline-none border-b border-orange-600/40 focus-within:border-b hover:border-orange-600 focus-within:border-orange-600 indent-1"
          ></input>
        </label>
        <label className="text-2xl font-libre flex flex-col hover:text-orange-600 text-orange-600/70 focus-within:text-orange-600  gap-2">
          Last Name
          <input
            {...register("lastName", { required: "This field is required" })}
            type="text"
            className="border-b border-orange-600/40 text-black focus-within:outline-none focus-within:border-b hover:border-orange-600 focus-within:border-orange-600 indent-1"
          ></input>
        </label>
        <label className="text-2xl font-libre flex flex-col hover:text-orange-600 text-orange-600/70 focus-within:text-orange-600  gap-2">
          Email
          <input
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
              required: {
                value: true,
                message: "Email id required",
              },
            })}
            type="text"
            className="border-b border-orange-600/40 text-black focus-within:outline-none focus-within:border-b hover:border-orange-600 focus-within:border-orange-600 indent-1"
          ></input>
          <span className="text-lg italic">Enter a valid email address</span>
        </label>
        <label className="text-2xl font-libre flex flex-col hover:text-orange-600 text-orange-600/70 focus-within:text-orange-600 gap-2">
          Password
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password required",
              },
              minLength: {
                value: 5,
                message: "Password should contain atleast 5 characters",
              },
            })}
            type="password"
            className="border-b border-orange-600/40 text-black focus-within:outline-none text-3xl focus-within:border-b hover:border-orange-600 focus-within:border-orange-600 indent-1"
          ></input>
          <span className="text-lg italic">Minimum 5 characters long</span>
        </label>
      </div>
      <button
        disabled={!formState.isValid || !formState.isDirty}
        type="submit"
        className="p-3 pb-4 w-96 rounded-lg text-2xl border-2  border-orange-600 box-content text-orange-600  enabled:hover:bg-orange-600 enabled:hover:text-white transition-all mt-3 disabled:border-orange-600/40 disabled:text-orange-600/40"
      >
        Sign Up
      </button>
      <button
      type="button"
        onClick={() => toggleModalVisible("signin")}
        className="text-2xl text-black font-raleway pb-10"
      >
        Already have an account?{" "}
        <span className="text-orange-600 underline-offset-2 underline">
          Sign In
        </span>
      </button>
    </form>
  );
}

export default SignUpForm;
