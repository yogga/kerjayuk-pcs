import Layout from "../Layout";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StickyHeader from "../../components/StickyHeader";
import { Avatar, Box, Button, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import notificationApi from "./../../../public/assets/notificationAPI.json";
import { useEffect, useState } from "react";

interface NotificationProps {
    id: number,
    title: string,
    excerpt: string,
    description: string,
    day: string,
}

export default function Notification() {
    const navigate = useNavigate();
    const [notification, setNotification] = useState<NotificationProps[]>([])

    const handleBack = () => {
        navigate("/")
    }

    useEffect(() => {
        setNotification(notificationApi)
    }, [])


    return (
        <Layout>
            <div className="min-h-screen h-full">
                <StickyHeader>
                    <div className="flex gap-2 items-center pt-5 pb-4 px-5">
                        <IconButton onClick={handleBack}>
                            <ArrowBackIcon className="text-black !text-[30px] md:!text-3xl" />
                        </IconButton>

                        <p className="font-extrabold text-mainColor-100 bg-red text-2xl md:text-3xl leading-none">
                            Notification
                        </p>
                    </div>
                </StickyHeader>

                <div className="pb-7 pt-24">
                    <ul>
                        {notification.map((res: NotificationProps, index: number) => {
                            return (
                                <li key={index} className="flex gap-2 items-start">
                                    <Box sx={{ color: 'action.active', width: '100%' }}>
                                        <Button className="!text-black !flex !justify-start !items-start !gap-x-3 !py-3 !px-5 !rounded-none !w-full">
                                            <div className="relative">
                                                <Avatar
                                                    variant="square"
                                                    className="!rounded-md !shadow-lg bg-gradient-to-br from-mainColor-100 to-mainColor-900 !w-[3.1rem] !h-[3.1rem]">
                                                    <AssignmentIcon />
                                                </Avatar>

                                                <CheckIcon
                                                    sx={{ fontSize: '20px', color: 'white', fontWeight: '600 !important' }}
                                                    className="bg-green-500 rounded-full absolute -bottom-1 -right-1 p-[2px]"
                                                />
                                            </div>

                                            <div className="grid text-left text-xs w-full">
                                                <div className="flex justify-between capitalize mb-1.5">
                                                    <p className="font-extrabold text-xs">{res.title}</p>
                                                    <p className="opacity-20 font-extrabold">{res.day}</p>
                                                </div>
                                                <span className="normal-case mr-[3.5rem]">{res.excerpt}</span>
                                            </div>
                                        </Button>
                                    </Box>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout >
    )
}