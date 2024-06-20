import React from "react";
import Scoutflairlogo from "../../assets/Scoutflairlogo.svg"

const SignUpPage: React.FC = () => {
    return (
        <div className="flex flex-row">
            <div className="w-full sm:w-1/2 h-screen relative overflow-hidden bg-[url('frame-36351.jpeg')] bg-cover bg-no-repeat bg-center hidden sm:block">
                <p className="w-[522px] absolute left-[135px] top-12 text-base text-center capitalize text-white">
                    Welcome aboard! scoutFlair awaits your football brilliance
                </p>
                <div className="flex justify-start items-center w-[610.75px] h-[128.58px] absolute left-[72px] top-[513px] gap-[42.85964584350586px]">
                    <img className="w-[129px] h-[129px]" src={Scoutflairlogo} alt="" />
                    <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left text-white">
                        <span className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-left text-white">
                            Scout
                        </span>
                        <span className="flex-grow-0 flex-shrink-0 text-[32px] text-left text-white">Flair</span>
                    </p>
                </div>
                <div className="flex justify-start items-end absolute left-[72px] top-[1214px] opacity-[0.88] gap-[312px]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <svg
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M9 2.32812C7.58154 2.32812 6.19493 2.74875 5.01552 3.5368C3.83611 4.32486 2.91688 5.44495 2.37405 6.75544C1.83123 8.06593 1.68921 9.50796 1.96593 10.8992C2.24266 12.2904 2.92572 13.5683 3.92872 14.5713C4.93173 15.5743 6.20963 16.2573 7.60084 16.5341C8.99205 16.8108 10.4341 16.6688 11.7446 16.1259C13.055 15.5831 14.1751 14.6639 14.9632 13.4845C15.7513 12.3051 16.1719 10.9185 16.1719 9.5C16.1696 7.59859 15.4133 5.77569 14.0688 4.43119C12.7243 3.08668 10.9014 2.33036 9 2.32812ZM9 15.8281C7.74842 15.8281 6.52494 15.457 5.48429 14.7616C4.44363 14.0663 3.63254 13.078 3.15358 11.9217C2.67462 10.7654 2.5493 9.49298 2.79347 8.26544C3.03764 7.03791 3.64034 5.91034 4.52534 5.02534C5.41035 4.14034 6.53791 3.53764 7.76545 3.29347C8.99298 3.0493 10.2654 3.17461 11.4217 3.65357C12.578 4.13254 13.5663 4.94363 14.2616 5.98428C14.957 7.02494 15.3281 8.24841 15.3281 9.5C15.3263 11.1778 14.659 12.7863 13.4726 13.9726C12.2863 15.159 10.6778 15.8263 9 15.8281ZM6.60938 9.5C6.60938 10.0018 6.76725 10.4908 7.06063 10.8978C7.35401 11.3049 7.76802 11.6093 8.24402 11.7679C8.72002 11.9266 9.23388 11.9315 9.71281 11.7819C10.1917 11.6323 10.6115 11.3358 10.9125 10.9344C10.9797 10.8449 11.0798 10.7857 11.1906 10.77C11.3014 10.7542 11.414 10.7831 11.5035 10.8504C11.593 10.9176 11.6521 11.0176 11.6679 11.1284C11.6836 11.2393 11.6547 11.3518 11.5875 11.4413C11.1801 11.9842 10.6122 12.3852 9.96429 12.5875C9.31636 12.7897 8.62122 12.783 7.97731 12.5683C7.33341 12.3535 6.77338 11.9417 6.37654 11.391C5.9797 10.8403 5.76616 10.1788 5.76616 9.5C5.76616 8.82124 5.9797 8.15967 6.37654 7.60901C6.77338 7.05834 7.33341 6.64647 7.97731 6.43174C8.62122 6.21701 9.31636 6.2103 9.96429 6.41255C10.6122 6.6148 11.1801 7.01577 11.5875 7.55867C11.6547 7.64818 11.6836 7.76073 11.6679 7.87156C11.6521 7.98239 11.593 8.08242 11.5035 8.14965C11.414 8.21687 11.3014 8.24579 11.1906 8.23003C11.0798 8.21427 10.9797 8.15514 10.9125 8.06562C10.6115 7.66422 10.1917 7.36772 9.71281 7.21812C9.23388 7.06851 8.72002 7.07339 8.24402 7.23205C7.76802 7.39072 7.35401 7.69514 7.06063 8.10218C6.76725 8.50922 6.60938 8.99825 6.60938 9.5Z"
                                fill="white"
                            />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 w-[130px] text-lg text-left text-white">
                            {" "}
                            ScoutFlair 2024
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 xs:w-full">
                <div
                    className="flex flex-col justify-start items-start relative gap-12 px-6 py-10 md:px-24 md:py-[72px] rounded-tl-3xl rounded-bl-3xl bg-white"
                    style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
                >
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                        <p className="flex-grow-0 flex-shrink-0 text-xl md:text-2xl font-bold text-left text-black">
                            Create an account
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-sm md:text-xs font-bold text-left text-black/[0.72]">
                            Please enter your details
                        </p>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-full md:w-[400px] relative">
                        <div className="w-full md:w-[400px]">
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="text"
                                    placeholder="Coaching License Number"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="number"
                                    placeholder="Coaching Experience (years)"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="text"
                                    placeholder="Current Team or Club"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                            <div className="w-full md:w-[400px] mb-6">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full h-12 px-3 rounded-lg border-[0.72px] border-black/80"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center gap-6 mt-6">
                            <div className="flex flex-col justify-start items-center gap-1">
                                <div className="flex justify-start items-center gap-2">
                                    <input type="checkbox" className="w-3 h-3 bg-white border border-black" />
                                    <p className="text-sm md:text-base opacity-[0.72] text-black">
                                        By creating an account, you are agreeing to our
                                    </p>
                                </div>
                                <p className="text-sm md:text-base font-semibold text-left text-[#010e1d]">
                                    Terms of Service and Privacy Policy.
                                </p>
                            </div>
                            <button
                                className="flex justify-center items-center w-full md:w-[400px] h-12 rounded-[20px] bg-[#f2a725] text-2xl font-semibold text-black"
                                style={{ boxShadow: "0px 16px 24px 2px rgba(0,0,0,0.14)" }}
                            >
                                Sign Up
                            </button>
                            <p className="text-sm md:text-base text-left">
                                <span className="text-black">Already have an account?</span>
                                <span className="font-bold text-[#010e1d] ml-1">Sign In</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage