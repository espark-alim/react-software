import React from 'react'

const TimeZones = () => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <a href="#"><img src="assets/arrow.png" alt="" /></a>
                <p className="font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl">
                    Timezones
                </p>
            </div>
            <div className="flex flex-col gap-3 py-3 pl-7 pr-2">
                <p className="font-['Gilroy-Regular'] font-normal text-[#595959] text-xl leading-7">
                    How to display “Today”
                </p>
            </div>
            <div className="pl-7">
                <div className="inline-flex justify-start items-center gap-14 py-4">
                    <div
                        className="inline-flex flex-col justify-start items-center gap-2.5 border-2 border-secondary hover:border-[#057472] hover:bg-[#eaf6f9] px-[25px] py-[29px] rounded-[13px] w-[348px] h-[239.48px] cursor-pointer group">
                        <div className="flex flex-col justify-start items-start gap-[5px] h-[163.01px]">
                            <img src="./assets/setting/timezones/Local.svg" height="20px" width="20px"
                                className="group-hover:filter group-hover:brightness-75" />
                            <div
                                className="group-hover:text-[#057472] font-semibold text-[26.38px] text-secondary leading-[36.93px] self-stretch">
                                Local
                            </div>
                            <div className="group-hover:text-[#057472] font-normal text-[17px] text-secondary leading-snug self-stretch">
                                Display today's tracked time based on today in my timezone.
                                UTC Display today's tracked time corresponding to the weekly
                                billing cycle.
                            </div>
                        </div>
                    </div>
                    <div
                        className="inline-flex flex-col justify-start items-center gap-2.5 border-2 border-secondary hover:border-[#057472] hover:bg-[#eaf6f9] px-[25px] py-[29px] rounded-[13px] w-[348px] h-[239.48px] cursor-pointer group">
                        <div className="flex flex-col justify-start items-start gap-[5px] h-[163.01px]">
                            <img src="./assets/setting/timezones/UTC.svg" height="20px" width="20px"
                                className="group-hover:filter group-hover:brightness-75" />
                            <div
                                className="group-hover:text-[#057472] font-semibold text-[26.38px] text-secondary leading-[36.93px] self-stretch">
                                UTC
                            </div>
                            <div className="group-hover:text-[#057472] font-normal text-[17px] text-secondary leading-snug self-stretch">
                                Display today's tracked time corresponding to the weekly
                                billing cycle.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeZones
