import React from 'react'
import logo from '../../assets/logo.png';
import { open } from '../../utils/utils';

const Splash = () => {

    return (
        <div className="flex flex-col my-12 sm:my-0">
            <div className="text-center mx-auto max-w-[550px]">
                <div>
                    <img src={logo}
                        className="w-auto mx-auto" />
                </div>
                <div className="mx-auto max-w-[395px] mt-10">
                    <button
                        onClick={() => open('/welcome')}
                        className="tracking-wide font-semibold bg-gradient-to-r from-[#029e9c] to-[#066865] rounded-[13.56px] backdrop-blur-[135.60px] text-gray-100 w-full py-[13px]  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        Continue
                    </button>
                </div>
                <div className="mt-5">
                    <p className="text-center text-white text-lg font-normal font-gilroy font-semiBold leading-[31px]">
                        You’ll be taken to your web browser to login or create a new account in eSpark talent employee management dashboard Screen tracking </p>
                </div>

            </div>
        </div>
    )
}

export default Splash
