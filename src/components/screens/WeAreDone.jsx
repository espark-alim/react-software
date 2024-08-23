import React from 'react'

const WeAreDone = () => {
    return (
        <div className="flex flex-col my-8 sm:my-12">
            <div className="text-center mx-3 sm:mx-auto max-w-[550px]">
                <div className="w-full h-auto my-12 sm:my-5 text-left max-w-[420.37px] sm:min-w-[420.37px] sm:p-10 pt-6 pb-6 px-6 max-h-auto sm:max-h-[403.53px] bg-done-sm-only">
                    <div className="text-center justify-center items-center mt-1">
                        <p className="text-white text-[28.37px] mx-auto font-semiBold font-gilroy">We are done!</p>
                        <p className="max-w-[246.98px] h-auto mx-auto text-center text-white my-2 text-[16px] font-gilory font-semiBold">
                            If you are not automatically redirected, Click continue button.
                        </p>
                        <div className="mx-auto max-w-[395px] mt-7">
                            <button id="done-btn"
                                className="font-semiBold bg-gradient-to-r from-[#029e9c] to-[#066865] rounded-[13.56px] backdrop-blur-[135.60px] text-gray-100 w-full py-[13px]  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            // onClick={handleDoneAndContinue()}
                            >
                                Countinue
                            </button>
                        </div>
                        <p for="bordered-checkbox-2"
                            className="w-full py-5 text-center text-[#1ebcba] text-[13.01px] font-normal font-['Helvetica']">
                            <a href="#"> Help centre? </a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeAreDone
