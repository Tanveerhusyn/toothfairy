import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import validator from "validator";

function Login({ isLogged, setisLogged }) {
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [validate1, setValidate1] = useState(true);
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  const validatePassword = (e) => {
    setPass(e.target.value);
  };

  const toggleError = () => {
    setShowError(!true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError!=""||email==""||pass=="") {
      setShowError(true);
    } else {
      setisLogged(true);
    }
  };

  return (
    <div>
      <div className="font-sans mt-20 h-screen">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="text-start pl-1 font-semibold text-black text-3xl">
                  <h1>Login to Admin Panel </h1>
                </div>
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                  <span className="text-sm text-gray-500">
                    Use you email and password to login to Admin Panel
                  </span>
                </div>

                <form className="mt-8" autoComplete="off">
                  <div className="mx-auto max-w-lg">
                    <div className="py-2">
                      <span className="px-1 text-sm text-gray-600">Email</span>
                      <input
                        type="text"
                        id="userEmail"
                        autoCapitalize="off"
                        required
                        value = {email}
                        onChange={(e) => validateEmail(e)}
                        placeholder="Enter email address..."
                        type="email"
                        className="text-md block  px-3 py-2  rounded-lg w-full  bg-gray-200 border-2 border-gray-300  placeholder-gray-400  focus:placeholder-gray-400 focus:bg-white focus:border-gray-600 focus:outline-none bg-gray"
                      />
                      <p className="text-red-500 ml-2">{emailError}</p>
                    </div>
                    <div className="py-2" x-data="{ show: true }">
                      <span className="px-1 text-sm text-gray-600">
                        Password
                      </span>
                      <div className="relative">
                        <input
                          placeholder="Enter password..."
                          type="password"
                          required
                          value ={pass}
                          onChange={validatePassword}
                          className="text-md block px-3 py-2 rounded-lg w-full  bg-gray-200
                                    bg-white border-2 border-gray-300 placeholder-gray-400 focus:placeholder-gray-400 
                                    focus:placeholder-gray-500
                                    focus:bg-white 
                                    focus:border-gray-600  
                                    focus:outline-none"
                        />
                      </div>
                      {/* <div className="fas fa-eye text-red absolute inset-y-0 right-0 pr-3 mt-20   flex items-center text-sm leading-5"></div> */}
                    </div>
                    <div className="flex justify-between">
                      <label className="block text-gray-500 font-bold my-4">
                        <input
                          type="checkbox"
                          className="leading-loose text-pink-600"
                        />{" "}
                        <span className="py-2 text-sm text-gray-600 leading-snug">
                          {" "}
                          Remember Me{" "}
                        </span>
                      </label>
                    </div>{" "}
                    <Link to="/dashboard">
                      <button
                        type="submit"
                        // onClick="ValidateForm"
                        className="mt-3 text-lg font-semibold 
                          bg-black w-full text-white rounded-lg
                          px-6 py-3 block shadow-sm hover:text-white hover:bg-black"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {showError ? (
            <div className="left-0  m-2 ">
              <div
                className="relative py-3 pl-4 font-bold pr-10  text-red-600 rounded-lg"
                role="alert"
              >
                <p>Email or Password is incorrect!</p>
                <span
                  onClick={toggleError}
                  class="absolute inset-y-0 text-bold cursor-pointer right-0 text-white flex items-center mr-4"
                >
                  x
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;