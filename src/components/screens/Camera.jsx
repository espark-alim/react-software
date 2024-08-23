import React from 'react'

const Camera = () => {
    return (
        <div>
            <div>
                <div className="flex items-center gap-3">
                    <a href="#"><img src="assets/arrow.png" alt="" /></a>
                    <p className="font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl">
                        Camera
                    </p>
                </div>

                <div className="flex flex-col gap-3 py-3 pl-7">
                    <p className="font-['Gilroy-Regular'] font-normal text-[#595959] text-xl leading-7">
                        You don't seem to have any camera on your computer.
                    </p>
                </div>
                <div className="flex flex-col pl-7 pr-2">
                    <div className="py-2">
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value=""
                                className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded focus:ring-primary dark:focus:ring-primary focus:ring-2 dark:ring-offset-gray-800 w-4 h-4 text-primary" />
                            <label for="default-checkbox" className="font-normal text-secondary text-xl leading-7 ms-2">Take Camera
                                Shots with screenshots while tracking</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pl-7 pr-2">
                    <div className="font-normal text-secondary text-xl leading-7">Camera Source:</div>
                    <div>
                        <input id="default-checkbox" type="checkbox" value=""
                            className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded focus:ring-primary dark:focus:ring-primary focus:ring-2 dark:ring-offset-gray-800 w-4 h-4 text-primary" />
                        <label for="default-checkbox" className="font-normal text-secondary text-xl leading-7 ms-2">OBS
                            Virtual Camera</label>
                    </div>
                    <div>
                        <input id="default-checkbox" type="checkbox" value=""
                            className="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 rounded focus:ring-primary dark:focus:ring-primary focus:ring-2 dark:ring-offset-gray-800 w-4 h-4 text-primary" />
                        <label for="default-checkbox" className="font-normal text-secondary text-xl leading-7 ms-2">HD Camera USB
                            2.0</label>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-semibold text-[#057472] text-xl leading-7">Test it Out!</div>
                        <img id="latest-capture-image" className="shadow rounded-[13px] w-[200px] h-[100px]"
                            src="./assets/screenshot/screenshot.png" />
                    </div>
                    <div>
                        <div className="py-2 font-normal text-secondary text-xl leading-7">
                            Camera Resolution:
                        </div>
                        <button id="dropdownDelayButton"
                            className="inline-flex justify-between items-center border-2 border-primary focus:border-primary bg-white px-5 py-2.5 rounded-lg ring-primary focus:ring-[1px] focus:ring-primary w-[281.62px] h-[47.07px] font-semibold text-1xl text-primary focus:outline-none text-center outline-none"
                            type="button">
                            <span id="selectedItemText" className="font-normal text-[#057472] text-lg leading-[25.20px]">
                                Medium
                            </span>
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdownDelay" className="z-10 hidden bg-white shadow rounded-lg divide-y divide-gray-100 w-[281.62px]">
                            <ul className="py-2 text-primary text-sm dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                <li
                                    className="block hover:bg-white px-4 py-2 font-normal text-lg text-secondary hover:text-primary leading-[25.20px] cursor-pointer dropdown-item">
                                    Low
                                </li>
                                <li
                                    className="block hover:bg-white px-4 py-2 font-normal text-lg text-secondary hover:text-primary leading-[25.20px] cursor-pointer dropdown-item">
                                    Medium
                                </li>
                                <li
                                    className="block hover:bg-white px-4 py-2 font-normal text-lg text-secondary hover:text-primary leading-[25.20px] cursor-pointer dropdown-item">
                                    High
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Camera
