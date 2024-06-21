import React from "react";
import Scoutflairlogo from "../../assets/Scoutflairlogo.svg"

const PlayerSignUp: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#041931] flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center md:h-screen bg-[#041931] p-4 md:p-0">
                <div className="text-white text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        Unlock Your Football Potentials With Scoutflair
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <img className="w-8 h-8" src={Scoutflairlogo} alt="" />
                        <span className="text-xl font-bold">Scout</span>
                        <span className="text-xl">Flair</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-[#f8f8ff] p-4 md:p-8">
                <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Create Account</h2>
                        <p className="text-sm text-gray-600">Please enter your details</p>
                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Position"
                                className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Current Team"
                                className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Preferred Foot"
                                className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <label className="text-gray-700 text-sm">
                                By creating an account, you are agreeing to our <span className="font-bold italic">Terms of Service</span> and <span className="font-bold italic">Privacy Policy</span>
                            </label>
                        </div>
                        <button className="w-full py-2 bg-[#f2a725] text-black font-bold rounded-md hover:bg-yellow-500 transition">Sign Up</button>
                    </form>
                    <div className="text-center my-4">
                        <p className="text-gray-600 font-bold">Or</p>
                    </div>
                    <div className="space-y-2">
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Google</span>
                        </button>
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Apple</span>
                        </button>
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-gray-700">Already have an account? <span className="font-bold text-[#010e1d]">Sign In</span></p>
                    </div>
                </div>
            </div>
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[2353.99px] h-[2353.99px] absolute left-[3461px] top-[-2355px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[71.39px] h-[71.39px] absolute left-[81px] top-[413.42px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[52.27px] h-[52.27px] absolute left-[162px] top-[382.01px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[39.19px] h-[39.19px] absolute left-56 top-[350.25px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[27px] h-[27px] absolute left-[276px] top-[324.88px] object-cover"
            />
        </div>
    );
}

export default PlayerSignUp;
