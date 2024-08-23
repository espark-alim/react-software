import React from 'react'

const Reminder = () => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <a href="#"><img src="assets/arrow.png" alt="" /></a>
                <p className="font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl">
                    Reminders
                </p>
            </div>

            <div className="flex flex-col gap-3 py-3 pl-7">
                <p className="font-['Gilroy-Regular'] font-normal text-[#595959] text-xl leading-7">
                    {/* <!-- Memo Reminder Dropdown --> */}
                    Reminder to change memo every:
                </p>
                <div className="inline-block relative w-full max-w-[282px]">
                    <div id="memo-dropdownButton"
                        className="flex justify-between items-center border-[#9CBFBF] border-2 focus:border-[#029E9C] bg-white shadow-sm px-4 rounded-[11px] focus:ring-2 focus:ring-[#029E9C] w-full text-base text-gray-700 text-left focus:outline-none">
                        <span id="memo-selectedOption" className="py-3 w-full h-full text-[#057472] text-[18px]">No reminder</span>
                        <div>
                            <img id="memo-dropdownArrow" src="assets/dropdown.png" alt=""
                                className="transition-transform duration-300 ease-in-out" />
                        </div>
                    </div>
                    <div id="memo-dropdownContent"
                        className="absolute border-[#9CBFBF] hidden bg-white shadow-lg mt-1 border rounded-[11px] w-full memo-dropdown-content">
                    </div>
                </div>
            </div>

            {/* <!-- Tracking Reminder Dropdown --> */}
            <div className="flex flex-col gap-3 py-4 pl-7">
                <p className="font-['Gilroy-Regular'] font-normal text-[#595959] text-xl leading-7">
                    When time tracking is off, show reminder to turn it on every:
                </p>
                <div className="inline-block relative w-full max-w-[282px]">
                    <div id="tracking-dropdownButton"
                        className="flex justify-between items-center border-[#9CBFBF] border-2 focus:border-[#029E9C] bg-white shadow-sm px-4 rounded-[11px] focus:ring-2 focus:ring-[#029E9C] w-full text-base text-gray-700 text-left focus:outline-none">
                        <span id="tracking-selectedOption" className="py-3 w-full h-full text-[#057472] text-[18px]">No
                            reminder</span>
                        <div>
                            <img id="tracking-dropdownArrow" src="assets/dropdown.png" alt=""
                                className="transition-transform duration-300 ease-in-out" />
                        </div>
                    </div>
                    <div id="tracking-dropdownContent"
                        className="absolute border-[#9CBFBF] hidden bg-white shadow-lg mt-1 border rounded-[11px] w-full tracking-dropdown-content">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reminder
