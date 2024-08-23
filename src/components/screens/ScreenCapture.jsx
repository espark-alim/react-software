import React from 'react'

const ScreenCapture = () => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <a href="#"><img src="assets/arrow.png" alt="" /></a>
                <p className="font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl">
                    Screen Capture
                </p>
            </div>

            <div className="flex flex-col gap-3 py-3 pl-7">
                <p className="font-['Gilroy-Regular'] font-normal text-[#595959] text-xl leading-7">
                    Current Hrs Utilize
                </p>
            </div>
            <div className="pl-7 pr-2">
                <div className="inline-flex justify-start items-center gap-14 py-4">
                    <div
                        className="inline-flex flex-col justify-center items-start gap-2.5 border-2 border-secondary hover:border-[#057472] hover:bg-[#eaf6f9] px-[25px] py-[29px] rounded-[13px] w-[348px] h-[239.48px] cursor-pointer group">
                        <div className="flex flex-col justify-start items-start gap-[5px] h-[163.01px]">
                            <img src="./assets/setting/capture-screen/single-screen.svg" height="32px" width="32px"
                                className="group-hover:filter group-hover:brightness-75" />
                            <div
                                className="group-hover:text-[#057472] font-normal text-[26.38px] text-secondary leading-[36.93px] self-stretch">
                                Capture Active<br />
                                Monitor
                            </div>
                            <div className="group-hover:text-[#057472] font-normal text-[17px] text-secondary leading-snug self-stretch">
                                Monitor that contains the<br />
                                active application
                            </div>
                        </div>
                    </div>
                    <div
                        className="inline-flex flex-col justify-center items-start gap-2.5 border-2 border-secondary hover:border-[#057472] hover:bg-[#eaf6f9] px-[25px] py-[29px] rounded-[13px] w-[348px] h-[239.48px] cursor-pointer group">
                        <div className="flex flex-col justify-start items-start gap-[5px] h-[163.01px]">
                            <img src="./assets/setting/capture-screen/multi-screen.svg" height="32px" width="32px"
                                className="group-hover:filter group-hover:brightness-75" />
                            <div
                                className="group-hover:text-[#057472] font-normal text-[26.38px] text-secondary leading-[36.93px] self-stretch">
                                Capture All<br />
                                Monitors
                            </div>
                            <div className="group-hover:text-[#057472] font-normal text-[17px] text-secondary leading-snug self-stretch">
                                All connected monitors
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-semibold text-[#057472] text-4xl leading-[50.74px]">
                    Screen Capture
                </div>
                <div className="flex justify-between items-start py-2">
                    <div className="inline-flex flex-col justify-start items-start gap-2.5 w-[409px]">
                        <div className="font-semibold text-[20px] text-secondary leading-7">
                            Desktop Notification
                        </div>
                        <div className="font-normal text-secondary text-xl self-stretch">
                            Show desktop notification on screen capture
                        </div>
                        <div className="font-normal text-secondary text-xl self-stretch">
                            Notification
                        </div>
                        <button id="dropdownDelayButton"
                            className="inline-flex justify-between items-center border-2 border-primary focus:border-primary bg-white px-5 py-2.5 rounded-lg ring-primary focus:ring-[1px] focus:ring-primary w-[281.62px] h-[47.07px] font-semibold text-1xl text-primary focus:outline-none text-center outline-none"
                            type="button">
                            <span id="selectedItemText" className="font-normal text-[#057472] text-lg leading-[25.20px]"> Detailed
                                Notification
                            </span>
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownDelay"
                            className="z-10 hidden bg-white shadow rounded-lg divide-y divide-gray-100 w-[281.62px]">
                            <ul className="py-2 text-primary text-sm dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                <li
                                    className="block hover:bg-white px-4 py-2 font-normal text-lg text-secondary hover:text-primary leading-[25.20px] cursor-pointer dropdown-item">
                                    Detailed Notification
                                </li>
                                <li
                                    className="block hover:bg-white px-4 py-2 font-normal text-lg text-secondary hover:text-primary leading-[25.20px] cursor-pointer dropdown-item">
                                    Simple Notification
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="items-start px-3">
                        <label className="inline-flex items-start cursor-pointer">
                            <input type="checkbox" value="" className="peer sr-only" checked />
                            <div
                                className="relative after:top-[2px] after:absolute after:content-[''] peer-checked:after:border-white after:border-gray-300 dark:border-gray-600 bg-gray-200 after:bg-white dark:bg-gray-700 peer-checked:bg-primary after:border rounded-full after:rounded-full peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary w-[75px] after:w-[31px] h-[35px] after:h-[31px] after:transition-all peer-checked:after:translate-x-[40px] rtl:peer-checked:after:-translate-x-[40px] peer after:start-[2px]">
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-start py-2">
                    <div className="inline-flex flex-col justify-start items-start gap-2.5 w-[409px]">
                        <div className="font-semibold text-secondary text-xl leading-7">
                            Notification Sound
                        </div>
                        <div className="font-normal text-secondary text-xl self-stretch">
                            Play sound on screen capture.
                            <span className="font-semibold text-[20px] text-primary self-stretch">Test it out!
                            </span>
                        </div>
                        <div className="font-semibold text-[20px] text-primary self-stretch">
                            Upload custom sound
                        </div>
                    </div>
                    <div className="items-start px-3">
                        <label className="inline-flex items-start cursor-pointer">
                            <input type="checkbox" value="" className="peer sr-only" checked />
                            <div
                                className="relative after:top-[2px] after:absolute after:content-[''] peer-checked:after:border-white after:border-gray-300 dark:border-gray-600 bg-gray-200 after:bg-white dark:bg-gray-700 peer-checked:bg-primary after:border rounded-full after:rounded-full peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary w-[75px] after:w-[31px] h-[35px] after:h-[31px] after:transition-all peer-checked:after:translate-x-[40px] rtl:peer-checked:after:-translate-x-[40px] peer after:start-[2px]">
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenCapture
