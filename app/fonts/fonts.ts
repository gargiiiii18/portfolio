import localFont from "next/font/local";

export const typewriter = localFont({
    src: [
        {
            path: "/fonts/IBMPlexMono-Regular.ttf",
            weight: '400',
            style: 'normal',
        }
    ],
    variable: '--font-typewriter'
});