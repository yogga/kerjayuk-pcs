import { ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode,
}

export default function StickyHeader({ children }: Props) {
    const [isHeaderSticky, setIsHeaderSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 0) {
                setIsHeaderSticky(true);
            } else {
                setIsHeaderSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div className={`${isHeaderSticky ? 'shadow-lg' : ''} fixed w-full max-w-screen-sm bg-white z-[999]`}>
                {children}
            </div>
    )
}