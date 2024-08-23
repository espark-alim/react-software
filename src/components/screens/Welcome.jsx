import React, { useEffect, useState } from 'react'
import password from '../../assets/password.png'
import { Link } from 'react-router-dom'
import { handleChange, handleSubmit } from '../../utils/utils'

const Welcome = () => {
    const [disabled, setDisabled] = useState(true)
    const [user, setUser] = useState({
        email: '',
        password: '',
        keep_me_login: false
    })

    useEffect(() => {
        if (user?.email !== '' && user?.password !== '' && user?.keep_me_login) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [user])

    return (
        <div className="flex flex-col my-8 sm:my-12">
            <form onSubmit={(e) => handleSubmit(e, user, setUser, '/screen-capture')}>
                <div className="text-center mx-3 sm:mx-auto max-w-[550px]">
                    <div className="w-auto mb-8">
                        <h2 className=" text-white text-[28.37px] font-normal font-gilroy font-semiBold">Welcome!</h2>
                        <p className="text-center text-white text-sm font-normal font-gilroy font-semiBold">Use these
                            awesome forms to login</p>
                    </div>
                    <div className="w-full h-auto my-12 sm:my-5 text-left max-w-[420.37px] sm:min-w-[420.37px] sm:px-10 sm:pt-7 sm:pb-7  pt-6 pb-4 px-5 max-h-auto sm:max-h-[403.53px] bg-welcome-sm-only"
                        style={{ borderRadius: '27.87px' }}>
                        <div className="w-full">
                            <label className="text-white text-[13.01px] font-normal font-gilroy font-semiBold ml-2 underline-offset-0"
                                for="email">Email</label>
                            <input type="email" required placeholder="Example@consultants.com" name="email" value={user?.email} onChange={(e) => handleChange(e, 'email', user, setUser)}
                                id="email"
                                className="w-full h-auto mt-2 px-[18.58px] text-[#a0aec0] text-[13.01px] font-normal font-gilroy font-semiBold focus:outline-none bg-input" />
                            <div className="flex items-center gap-3 mt-6 sm:mt-9 w-full h-[46.45px] px-[18.58px] text-[#a0aec0] text-[13.01px] font-normal font-gilroy font-semiBold bg-input">
                                <img src={password} alt="password" className="w-auto" />
                                <input type="password" placeholder="Password" id="password" required name="password" value={user?.password}
                                    onChange={(e) => handleChange(e, 'password', user, setUser)}
                                    className="w-full h-auto text-[#a0aec0] text-[13.01px] font-normal font-gilroy font-semiBold focus:outline-none"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                    }} />
                            </div>
                            <div className="flex items-center ps-1 sm:ps-5 my-5">
                                <div class="flex items-center gap-0 my-3">
                                    <div class="custom-checkbox">
                                        <input id="keep_me_login" type="checkbox" checked={user?.keep_me_login}
                                            onChange={(e) => handleChange(e, 'keep_me_login', user, setUser)}
                                            name="keep_me_login" />
                                        <label for="custom-checkbox-${item.key}" class="checkbox-label"></label>
                                    </div>
                                    <label for="bordered-checkbox-2"
                                        className="w-auto text-nowrap ms-3 text-[#a0aec0]  text-[12px] sm:text-[13.01px] font-normal font-['Helvetica']">Keep
                                        me logged in</label>
                                </div>
                                <p className="w-full ms-3 text-right text-[#1ebcba] text-[12px] sm:text-[13.01px] font-normal font-['Helvetica']"> <Link to="/forget">Forget
                                    password? </Link></p>
                            </div>
                            <div className="mx-auto max-w-[395px] mt-7">
                                <button id="login-btn"
                                    type='submit'
                                    className="tracking-wide font-semibold bg-gradient-to-r from-[#029e9c] to-[#066865] rounded-[13.56px] backdrop-blur-[135.60px] text-gray-100 w-full py-[13px]  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                    disabled={disabled}
                                >
                                    Log in
                                </button>
                            </div>
                            <p for="bordered-checkbox-2"
                                className="w-full py-5 text-center text-[#1ebcba] text-[13.01px] font-normal font-['Helvetica']">
                                <Link to="#"> Help centre? </Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Welcome
