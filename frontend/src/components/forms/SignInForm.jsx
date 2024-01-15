import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import { useForm } from "react-hook-form";
function SignInForm({ toggleModalVisible }) {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  async function formSubmit(data) {
    console.log(data);
  }
  return (
    <form
      method="post"
      onSubmit={handleSubmit(formSubmit)}
      className="flex flex-col m-auto items-center transition-all gap-10"
    >
      <h2 className="text-center font-raleway text-orange-600 text-4xl w-full pt-10">
        Sign In
      </h2>
      <div className="flex flex-col gap-7 w-full px-14">
        <label className="text-2xl font-libre flex flex-col hover:text-orange-600 text-orange-600/70 focus-within:text-orange-600  gap-2">
          Email
          <input
            type="text"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            className="border-b border-orange-600/40 text-black focus-within:outline-none focus-within:border-b hover:border-orange-600 focus-within:border-orange-600 indent-1"
          ></input>
        </label>
        <label className="text-2xl font-libre flex flex-col hover:text-orange-600 text-orange-600/70 focus-within:text-orange-600 gap-2">
          Password
          <input
            {...register("password", { required: "This field is required" })}
            type="password"
            className="border-b border-orange-600/40 text-black focus-within:outline-none text-3xl focus-within:border-b hover:border-orange-600 focus-within:border-orange-600 indent-1"
          ></input>
        </label>
      </div>
      <button
        disabled={!formState.isValid}
        type="submit"
        className="p-3 pb-4 w-96 rounded-lg text-2xl border-2  border-orange-600 box-content text-orange-600  enabled:hover:bg-orange-600 enabled:hover:text-white transition-all mt-3 disabled:border-orange-600/40 disabled:text-orange-600/40"
      >
        Sign In
      </button>
      <button
        type="button"
        onClick={() => toggleModalVisible("signup")}
        className="text-2xl text-black font-raleway pb-10"
      >
        Don't have an account?{" "}
        <span className="text-orange-600 underline-offset-2 underline">
          Sign Up
        </span>
      </button>
    </form>
  );
}
export default SignInForm;
