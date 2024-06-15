import { useEffect, useRef, useState } from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

export default function Footer() {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [activeMenu, setActiveMenu] = useState("Home");

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
        console.log("Menu clicked:", menu);
    };

    useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    }, [value, setValue]);

    return (
        <div className="pb-28 bg-white !z-[999] relative menu" ref={ref}>
            <div className="grid grid-cols-5 fixed bottom-0 bg-white w-full max-w-screen-sm shadow-shadowNavigation">
                <Button
                    className={`${activeMenu === "Home" ? "active" : ""} !grid !justify-center !items-center !text-[#a0a0a0] !py-2`}
                    onClick={() => handleMenuClick("Home")}
                >
                    <CottageIcon sx={{ textAlign: 'center', margin: '0 auto' }} className='!pb-1 !text-[2.1rem]' />
                    <span className='text-[10px] sm:text-xs font-bold !capitalize'>Home</span>
                </Button>
                <Button
                    className={`${activeMenu === "Attendance" ? "active" : ""} !grid !justify-center !items-center !text-[#a0a0a0] !py-2`}
                    onClick={() => handleMenuClick("Attendance")}
                >
                    <EventAvailableIcon sx={{ textAlign: 'center', margin: '0 auto' }} className='!pb-1 !text-[2.1rem]' />
                    <span className='text-[10px] sm:text-xs font-bold !capitalize'>Attendance</span>
                </Button>
                <Button
                    className={`${activeMenu === "CheckOut" ? "active" : ""} !grid !justify-center !items-center !text-[#a0a0a0] !py-2`}
                    onClick={() => handleMenuClick("CheckOut")}
                >
                    <LogoutIcon sx={{ textAlign: 'center', margin: '0 auto' }} className='!text-[2.1rem] !bg-mainColor-100 !rounded-full !scale-[2.1] !p-[9px] !text-white !-translate-y-[1.6rem] !shadow-[0px_-1px_2px_1px_rgba(0,0,0,0.3)]' />
                    <span className='text-[10px] sm:text-xs font-bold !capitalize'>Check Out</span>
                </Button>
                <Button
                    className={`${activeMenu === "Form" ? "active" : ""} !grid !justify-center !items-center !text-[#a0a0a0] !py-2`}
                    onClick={() => handleMenuClick("Form")}
                >
                    <FeedIcon sx={{ textAlign: 'center', margin: '0 auto' }} className='!pb-1 !text-[2.1rem]' />
                    <span className='text-[10px] sm:text-xs font-bold !capitalize'>Form</span>
                </Button>
                <Button
                    className={`${activeMenu === "Setting" ? "active" : ""} !grid !justify-center !items-center !text-[#a0a0a0] !py-2`}
                    onClick={() => handleMenuClick("Setting")}
                >
                    <SettingsIcon sx={{ textAlign: 'center', margin: '0 auto' }} className='!pb-1 !text-[2.1rem]' />
                    <span className='text-[10px] sm:text-xs font-bold !capitalize'>Setting</span>
                </Button>
            </div>
        </div>
    );
}