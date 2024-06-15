import Layout from "../Layout";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Time from "../../components/Time";
import { Splide } from '../../../node_modules/@splidejs/react-splide';
import CardCarousel from "../../components/CardCarousel";
import AvatarGroup from '@mui/material/AvatarGroup';
import userOnline from "../../../public/assets/onlne.json";
import { useEffect, useState } from "react";

interface DataProps {
    id: number,
    name: string,
    location: string
}

export default function Home() {
    const [dataUserOnline, setDataUserOnline] = useState<DataProps[]>([])
    const [maxAvatars, setMaxAvatars] = useState<number>(10);

    const adjustMaxAvatars = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 583) {
            setMaxAvatars(7);
        } else {
            setMaxAvatars(10);
        }
    };

    useEffect(() => {
        setDataUserOnline(userOnline)

        adjustMaxAvatars();
        window.addEventListener('resize', adjustMaxAvatars);

        return () => {
            window.removeEventListener('resize', adjustMaxAvatars);
        };
    }, [])

    return (
        <Layout>
            <section className="pb-7 px-5 pt-24 mb-4">
                <p className="font-semibold text-lg mb-4">Hi, Good Morning!</p>

                <div className="w-full mx-auto grid grid-cols-3 grid-rows-2 bg-gradient-to-br from-mainColor-100 to-mainColor-900 p-5 rounded-2xl shadow-lg text-white">
                    <div className="flex flex-row gap-3 md:gap-5 col-span-2">
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt="Tabay"
                                src="/static/images/avatar/1.jpg"
                                className="!shadow-lg !w-[56px] !h-[56px] sm:!w-[66px] sm:!h-[66px]"
                            />
                        </Stack>
                        <div className="">
                            <p className="font-bold text-lg tracking-wider leading-none md:leading-normal">Tabay</p>
                            <span className="opacity-70 italic text-xs sm:text-sm">UI/UX Designer</span>
                        </div>
                    </div>

                    <div className="text-right col-span-1">
                        <span className="opacity-70 italic  text-xs sm:text-sm">Member since</span>
                        <p className="text-sm sm:text-lg font-bold tracking-wider leading-none">01 Juni 2021</p>
                    </div>

                    <div className="self-end col-span-2">
                        <span className="opacity-70  text-xs sm:text-sm">Location</span>
                        <p className="font-bold tracking-wider leading-none">Kantor Sahid</p>
                    </div>

                    <div className="self-end text-right col-span-1">
                        <span className="opacity-70 italic text-sm">ICO</span>
                    </div>
                </div>
            </section>

            <section className="pb-7 px-5 mb-4">
                <p className="font-semibold text-lg mb-4">Today's activity</p>

                <div className="flex justify-between px-4 sm:px-10">
                    <Time
                        icon={<AccessTimeIcon className="!mx-auto !text-[2.2rem] !text-mainColor-100" />}
                        time={"08:30"}
                        desc={"Check In"}
                        fontWeight={"bold"}
                        textColor={""}
                    />
                    <Time
                        icon={<AccessTimeIcon className="!mx-auto !text-[2.2rem] !text-mainColor-100" />}
                        time={"03:00:00"}
                        desc={"Check In"}
                        fontWeight={"extrabold"}
                        textColor={"mainColor-100"}
                    />
                    <Time
                        icon={<AccessTimeIcon className="!mx-auto !text-[2.2rem] !text-mainColor-100" />}
                        time={"08:30"}
                        desc={"Check In"}
                        fontWeight={"bold"}
                        textColor={""}
                    />
                </div>
            </section>

            <section className="pb-7 mb-4">
                <p className="font-semibold text-lg mb-4 px-5">PCS News</p>

                <Splide
                    options={{
                        type: 'loop',
                        arrows: false,
                        padding: '3rem',
                        gap: '1rem',
                        autoplay: true,
                        lazyload: 'nearby',
                    }}
                    aria-label="My Favorite Images"
                    className="pb-5"
                >
                    <CardCarousel />
                    <CardCarousel />
                    <CardCarousel />
                </Splide>
            </section>

            <section className="pb-7 px-5">
                <p className="font-semibold text-lg mb-4">Online</p>

                <div className="w-full flex justify-center">
                    <AvatarGroup
                        max={maxAvatars}
                        renderSurplus={(surplus) =>
                            <div className="bg-mainColor-100 flex justify-center items-center w-full h-full">
                                <span className="text-xs mx-auto text-center">
                                    {surplus.toString()} <br /> more
                                </span>
                            </div>
                        }
                        total={50}
                        className="avatar-online-custom shadow-shadowCustom rounded-2xl py-4 px-6"
                    >
                        {dataUserOnline.map((res: DataProps, index: number) => {
                            // take first name
                            const regex = /^(\w+)/;
                            const takeFirstName = res.name;
                            const match = takeFirstName?.match(regex);
                            const firstWord = match ? match[1] : "";

                            return (
                                <div key={index} className="text-center">
                                    <Avatar alt={res.name} src="/static/images/avatar/1.jpg" />
                                    <p className="font-extrabold text-xs">{firstWord}</p>
                                    <span className="text-xs opacity-70">{res.location}</span>
                                </div>
                            )
                        })}
                    </AvatarGroup>
                </div>
            </section>
        </Layout>
    )
}