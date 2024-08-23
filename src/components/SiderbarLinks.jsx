import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SiderbarLinks = () => {
    const location = useLocation()
    const { pathname } = location
    const bold = "font-['Gilroy-Bold']";
    const semiBold = "font-['Gilroy-SemiBold']";
    const active_borderAndText = "text-[#029E9C] active-border";
    const borderAndText = "text-[#595959] border-l-4 border-[transparent]";
    const menuItems = [
        { title: 'Screen Capture', link: '/screen-capture' },
        { title: 'Timezones', link: '/time-zones' },
        { title: 'Camera', link: '/camera' },
        { title: 'Reminders', link: '/reminders' },
        { title: 'Keyboard Shortcuts', link: '/keyboard-shortcuts' },
        { title: 'Advanced', link: '/advanced' },
    ];

    return (
        <div className='w-full'>
            {menuItems?.map(({ title, link }, index) => (
                <div className={`${pathname?.includes(link) ? active_borderAndText : borderAndText}   text-[22px] font-normal ${index === 0 ? bold : semiBold} leading-[30.80px] p-2 px-3 my-5`}>
                    <Link to={`${link || '#'}`} key={index}>
                        {title || ''}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SiderbarLinks
