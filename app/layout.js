import {Outfit} from "next/font/google";
import "./globals.css";
import Head from "next/head";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Blog Better",
    description: "Lorem Ipsum?",
};

export default function RootLayout({children}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <html lang="en">
            <body className={outfit.className}>{children}</body>
            </html>
        </>
    );
}
