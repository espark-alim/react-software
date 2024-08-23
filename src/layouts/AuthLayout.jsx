import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import bgImage from '../assets/bg-auth.png'
import logo from '../assets/logo.png'

const AuthLayout = () => {
    const location = useLocation();
    const { pathname } = location

    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen m-0 sm:m-0 bg-gradient-to-b from-[#0f123b] via-[#080c2d] to-[#020515] flex justify-center flex-1">
                    <div className="flex-1 text-center hidden lg:flex">
                        <div className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
                            style={{ backgroundImage: `url(${bgImage})` }}>
                            {pathname !== '/' && <img src={logo} alt="logo" class="w-1/2" />}
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12 h-full flex flex-col items-center justify-center relative">
                        <Outlet />
                        <div className="flex gap-2 absolute bottom-5 px-5">
                            <span className="text-center text-white text-sm font-normal font-gilroy font-semiBold leading-snug">2024-2030 all right revised to esparktalent. <Link to="/privicy-policy" target='_blank'><span className="text-center text-[#029e9c] text-sm font-normal font-gilroy font-semiBold leading-snug">Privacy policy</span></Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout
