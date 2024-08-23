import React from 'react'
import SiderbarLinks from '../components/SiderbarLinks'
import { Outlet } from 'react-router-dom'
import '../../src/index.css';
import icon from '../assets/icons/gear-icon-bold.svg'

const DashboardLayout = () => {
    return (
        <div className='h-screen overflow-auto'>
            <div className="relative flex justify-start items-center gap-1 bg-[#EAF6F9] px-4 w-full h-[50px]">
                <a href="./index.html">
                    <img src={icon} height="20px" width="20px" />
                </a>
                <a href="./index.html">
                    <p className="font-['Gilroy-SemiBold'] font-normal text-[#303030] text-xl mt-[0.9px]">
                        Setting
                    </p>
                </a>
            </div>
            <div class="flex h-[calc(100%-50px)]">
                <div className="bg-[#85e2e0]/10 py-4 pr-1 pl-4 w-[251px]  overflow-auto">
                    <SiderbarLinks />
                </div>
                <div className="bg-white px-6 py-11 w-[calc(100%-251px)] overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
