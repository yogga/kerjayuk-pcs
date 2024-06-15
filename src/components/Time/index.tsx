import { ReactNode } from 'react';

interface Props {
    icon: ReactNode,
    time: string,
    desc: string,
    fontWeight: string,
    textColor: string,
}

export default function Time({ icon, time, desc, fontWeight, textColor }: Props) {
    return (
        <div className="grid gap-1 justify-center text-center">
            {icon}
            <p className={`font-${fontWeight} text-lg text-${textColor}`}>{time}</p>
            <span className="text-xs opacity-70 font-semibold leading-none">{desc}</span>
        </div>

    )
}