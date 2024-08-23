import React from 'react'

const Forget = () => {

    return (
        <div className="flex flex-col my-8 sm:my-12">
            <div className="text-center mx-3 sm:mx-auto max-w-[550px]">
                <div className="w-full h-auto my-12 sm:my-5 text-left max-w-[420.37px] sm:min-w-[420.37px] sm:p-10 pt-6 pb-6 px-6 max-h-auto sm:max-h-[403.53px] bg-forget-sm-only">
                    <div className="text-center justify-center items-center">
                        <p className="text-white text-[28.37px] mx-auto font-SemiBold font-gilroy">Forget Password</p>
                        <p className="max-w-[246.98px] h-auto mx-auto text-center text-white my-2 text-lg font-gilory font-semibold">Enter the email address associated with your account</p>
                        <p className="w-full h-auto text-center text-white text-sm font-normal font-gilroy">We will email you a link to reset your password.</p>
                        <input type="text" placeholder="Enter email adress" name="email" value=""
                            id="email"
                            className="w-full h-[46.45px] mt-6 px-[18.58px] text-[#a0aec0] text-[13.01px] font-normal font-gilroy font-semiBold focus:outline-none  bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent visited:bg-transparent bg-input" />
                        <div className="mx-auto max-w-[395px] mt-7">
                            <button id="forget-btn"
                                className="font-semibold bg-gradient-to-r from-[#029e9c] to-[#066865] rounded-[13.56px] backdrop-blur-[135.60px] text-gray-100 w-full py-[13px]  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                // onClick=handleForget()
                                disabled>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forget
