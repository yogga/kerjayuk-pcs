import { Avatar } from '@mui/material';
import { SplideSlide } from '../../../node_modules/@splidejs/react-splide';

export default function CardCarousel() {
    return (
        <SplideSlide className="py-4 px-6 !mt-2 !mb-5 rounded-2xl !shadow-shadowCustom">
            <div className="grid grid-cols-5 gap-4">
                <div className="flex items-center gap-3 col-span-3">
                    <Avatar
                        alt="Anna Riswati"
                        src="/static/images/avatar/1.jpg"
                        className="!shadow-lg !w-[36px] !h-[36px]"
                    />
                    <p className="font-extrabold text-mainColor-100 w-[10rem]">Anna Riswati</p>
                </div>
                <p className="text-sm text-right col-span-2 grid">
                    <span>Senin </span>
                    <span>30 Mei 2022</span>
                </p>
                <div className="col-span-5">
                    <p className="overflow-x-hidden whitespace-nowrap px-2">
                        <strong>Kalimat 1</strong> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum dolorem quo tenetur blanditiis minus, earum natus assumenda aperiam impedit itaque iusto rerum non, quidem corrupti consectetur obcaecati numquam perferendis. <br />
                        <strong>Kalimat 2</strong> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum dolorem quo tenetur blanditiis minus, earum natus assumenda aperiam impedit itaque iusto rerum non, quidem corrupti consectetur obcaecati numquam perferendis. <br />
                        <strong>Kalimat 3</strong> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum dolorem quo tenetur blanditiis minus, earum natus assumenda aperiam impedit itaque iusto rerum non, quidem corrupti consectetur obcaecati numquam perferendis. <br />
                        <strong>Kalimat 4</strong> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum dolorem quo tenetur blanditiis minus, earum natus assumenda aperiam impedit itaque iusto rerum non, quidem corrupti consectetur obcaecati numquam perferendis.
                    </p>
                </div>
            </div>
        </SplideSlide>
    )
}