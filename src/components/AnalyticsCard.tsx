import React from "react";

const AnalyticsCard: React.FC = () => {
    return (
        <div
            className="flex flex-col md:flex-row justify-start items-start max-w-full w-full relative opacity-[0.92] gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl bg-white border-2 border-[#d1d1d1]"
            style={{ boxShadow: "0px 8px 10px 0 rgba(209,209,209,0.12)" }}
        >
            {/* Wins */}
            <div
                className="flex-grow-0 flex-shrink-0 w-full sm:w-[138px] h-[127px]"
                style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.08))" }}
            >
                <div className="flex flex-col justify-start items-start w-full sm:w-[138px] h-[120px] relative gap-4 p-4 rounded-lg bg-white border-[0.48px] border-black/[0.56]">
                    <div className="flex-grow-0 flex-shrink-0 w-[42px] h-[22px]">
                        <p className="text-lg text-left text-black">Wins</p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                        <svg
                            width={21}
                            height={12}
                            viewBox="0 0 21 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M21 10.5672C21.0002 10.7516 20.9431 10.932 20.836 11.0854C20.729 11.2388 20.5767 11.3584 20.3986 11.429C20.2204 11.4996 20.0244 11.5181 19.8352 11.482C19.6461 11.446 19.4724 11.3571 19.3361 11.2266L10.4758 2.7517L1.61557 11.2266C1.42915 11.3824 1.18774 11.4645 0.940356 11.4562C0.69297 11.4479 0.458154 11.3499 0.283584 11.182C0.109015 11.0141 0.00777834 10.789 0.000429892 10.5524C-0.00691855 10.3157 0.0801721 10.0852 0.244019 9.90774L9.79372 0.773366C9.88422 0.686705 9.99169 0.617956 10.11 0.57105C10.2283 0.524144 10.3551 0.5 10.4831 0.5C10.6112 0.5 10.738 0.524144 10.8563 0.57105C10.9746 0.617956 11.0821 0.686705 11.1726 0.773366L20.7077 9.90774C20.7994 9.99379 20.8725 10.0964 20.9227 10.2095C20.9729 10.3227 20.9991 10.4443 21 10.5672Z"
                                fill="#15CA27"
                            />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-medium text-left text-black">83</p>
                        <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">%</p>
                    </div>
                </div>
                <div className="w-full h-2 absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg bg-[#0fb21f] border-[0.48px] border-black/[0.56]" />
            </div>

            {/* Losses */}
            <div
                className="flex-grow-0 flex-shrink-0 w-full sm:w-[138px] h-[127px]"
                style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.08))" }}
            >
                <div className="flex flex-col justify-start items-start w-full sm:w-[138px] h-[120px] relative gap-4 p-4 rounded-lg bg-white border-[0.48px] border-black/[0.56]">
                    <div className="flex-grow-0 flex-shrink-0 w-[60px] h-[22px]">
                        <p className="text-lg text-left text-black">Losses</p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                        <svg
                            width={21}
                            height={12}
                            viewBox="0 0 21 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M21 1.43281C21.0002 1.24836 20.9431 1.06801 20.836 0.914594C20.729 0.761179 20.5767 0.641598 20.3986 0.570991C20.2204 0.500383 20.0244 0.481925 19.8352 0.51795C19.6461 0.553975 19.4724 0.642865 19.3361 0.773367L10.4758 9.2483L1.61557 0.773367C1.42915 0.617592 1.18774 0.535515 0.940356 0.543801C0.69297 0.552088 0.458154 0.650118 0.283584 0.817985C0.109015 0.985852 0.00777834 1.21097 0.000429892 1.44764C-0.00691855 1.68431 0.0801721 1.91478 0.244019 2.09226L9.79372 11.2266C9.88422 11.3133 9.99169 11.382 10.11 11.429C10.2283 11.4759 10.3551 11.5 10.4831 11.5C10.6112 11.5 10.738 11.4759 10.8563 11.429C10.9746 11.382 11.0821 11.3133 11.1726 11.2266L20.7077 2.09226C20.7994 2.00621 20.8725 1.90365 20.9227 1.79047C20.9729 1.67729 20.9991 1.55574 21 1.43281Z"
                                fill="#FF0000"
                            />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-medium text-left text-black">82</p>
                        <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">%</p>
                    </div>
                </div>
                <div className="w-full h-2 absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg bg-[#f00] border-[0.48px] border-black/[0.56]" />
            </div>

            {/* Skills */}
            <div
                className="flex-grow-0 flex-shrink-0 w-full sm:w-[138px] h-[127px]"
                style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.08))" }}
            >
                <div className="flex flex-col justify-start items-start w-full sm:w-[138px] h-[120px] relative gap-4 p-4 rounded-lg bg-white border-[0.48px] border-black/[0.56]">
                    <div className="flex-grow-0 flex-shrink-0 w-[50px] h-[22px]">
                        <p className="text-lg text-left text-black">Skills</p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                        <svg
                            width={21}
                            height={12}
                            viewBox="0 0 21 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M21 10.5672C21.0002 10.7516 20.9431 10.932 20.836 11.0854C20.729 11.2388 20.5767 11.3584 20.3986 11.429C20.2204 11.4996 20.0244 11.5181 19.8352 11.482C19.6461 11.446 19.4724 11.3571 19.3361 11.2266L10.4758 2.7517L1.61557 11.2266C1.42915 11.3824 1.18774 11.4645 0.940356 11.4562C0.69297 11.4479 0.458154 11.3499 0.283584 11.182C0.109015 11.0141 0.00777834 10.789 0.000429892 10.5524C-0.00691855 10.3157 0.0801721 10.0852 0.244019 9.90774L9.79372 0.773366C9.88422 0.686705 9.99169 0.617956 10.11 0.57105C10.2283 0.524144 10.3551 0.5 10.4831 0.5C10.6112 0.5 10.738 0.524144 10.8563 0.57105C10.9746 0.617956 11.0821 0.686705 11.1726 0.773366L20.7077 9.90774C20.7994 9.99379 20.8725 10.0964 20.9227 10.2095C20.9729 10.3227 20.9991 10.4443 21 10.5672Z"
                                fill="#15CA27"
                            />
                        </svg>
                        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-medium text-left text-black">83</p>
                        <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">%</p>
                    </div>
                </div>
                <div className="w-full h-2 absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg bg-[#0fb21f] border-[0.48px] border-black/[0.56]" />
            </div>
        </div>
    )
}

export default AnalyticsCard