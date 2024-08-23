import React from 'react'

const KeyboardShortcuts = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <a href="#"><img src="assets/arrow.png" alt="" /></a>
                    <p className="font-['Gilroy-SemiBold'] font-normal text-[#068987] text-xl">Turn all on</p>
                </div>
                <button id="reset-defaults" className="font-['Gilroy-SemiBold'] font-normal text-[#068987] text-xl">
                    Reset all defaults
                </button>
            </div>
            <div className="py-2 pr-2 pl-6">
                <p className="font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl leading-[50.74px]">Screen Tracking
                    Shortcuts</p>
                <div className="shortcuts-container"></div>
            </div>
        </div>
    )
}

export default KeyboardShortcuts
