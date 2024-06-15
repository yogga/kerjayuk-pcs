import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StickyHeader from '../StickyHeader';

export default function Header() {
    const navigate = useNavigate();

    const handleNotification = () => {
        navigate("/notification")
    }

    return (
        <StickyHeader>
            <div className="flex justify-between items-center pt-5 pb-4 px-5">
                <p className="font-extrabold text-mainColor-100 bg-red text-2xl md:text-3xl leading-none">KerjaYuk!</p>

                <Box sx={{ color: 'action.active' }} onClick={handleNotification}>
                    <IconButton>
                        <Badge color="secondary" variant="dot" id="notification-custom">
                            <NotificationsNoneIcon className='!text-[30px] md:!text-[35px]' />
                        </Badge>
                    </IconButton>
                </Box>
            </div>
        </StickyHeader>
    )
}