import React from 'react'

const Advanced = () => {
    return (
        <div>
            <div class="flex items-center gap-3">
                <a href="#"><img src="assets/arrow.png" alt="" /></a>
                <p class="font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl">
                    Advanced
                </p>
            </div>
            <div class="px-7 py-4">
                <div class="flex flex-col gap-6">
                    <div>
                        <p class="font-['Gilroy-SemiBold'] font-normal text-[#595959] text-xl">Automatic Launch</p>
                        <p class="font-['Gilroy-Regular'] font-normal text-[#595959] text-lg leading-[25.20px]">
                            Automatically launch the Upwork app when you turn on your computer</p>
                    </div>
                    <div>
                        <p class="font-['Gilroy-SemiBold'] font-normal text-[#595959] text-xl">Stop Tracker on
                            Screen Lock</p>
                        <p class="font-['Gilroy-Regular'] font-normal text-[#595959] text-lg leading-[25.20px]">
                            Automatically stop tracking time when your screen locks.</p>
                    </div>
                </div>
                <div class="my-6">
                    <div>
                        <p
                            class="mb-2 font-['Gilroy-SemiBold'] font-normal text-[#057472] text-4xl leading-[50.74px]">
                            Troubleshooting</p>
                        <p class="font-['Gilroy-Regular'] font-normal text-[#595959] text-lg leading-[25.20px]">Use
                            these options if instructed to do so by customer support, then click "restart".</p>
                    </div>
                    <div id="troubleshooting-list">
                        {/* <!-- Dynamic troubleshooting items will be inserted here --> */}
                    </div>
                    <div class="py-3">
                        <button id="restart-button"
                            class="flex justify-center items-center bg-gradient-to-r from-[#029e9c] to-[#066865] backdrop-blur-[111.48px] rounded-[11.15px] w-[106px] h-[42px]">
                            <span class="font-['Gilroy-SemiBold'] font-normal text-sm text-white">Restart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advanced
