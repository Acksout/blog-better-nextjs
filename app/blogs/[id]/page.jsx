"use client";
import {assets, blog_data} from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const Page = ({params}) => {
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get("/api/blog", {
            params: {
                id: params.id,
            },
        });
        setData(response.data);
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    return data ? (
        <>
            <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src={assets.logo}
                            width={180}
                            alt=""
                            className="w-[130px] sm:w-auto"
                        />
                    </Link>
                    <button
                        className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
                        Get started <Image src={assets.arrow} alt=""/>
                    </button>
                </div>
                <div className="my-24 text-center">
                    <h1 className="mx-auto text-2xl font-semibold max-w-[700px] sm:text-5xl">
                        {data.title}
                    </h1>
                    <Image
                        className="mx-auto mt-6 rounded-full border border-white"
                        src={data.authorImg}
                        width={60}
                        height={60}
                        alt=""
                    />
                    <p className="mx-auto mt-1 pb-2 text-lg max-w-[740px]">
                        {data.author}
                    </p>
                </div>
            </div>
            <div className="mx-5 mb-10 max-w-[800px] mt-[-100px] md:mx-auto">
                <Image
                    className="border-4 border-white"
                    src={data.image}
                    width={800}
                    height={480}
                    alt=""
                />

                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{__html: data.description}}
                ></div>
                <div className="my-24">
                    <p className="my-4 font-semibold text-black font">
                        Share this article
                    </p>
                    <div className="flex">
                        <Image src={assets.facebook_icon} width={50} alt=""/>
                        <Image src={assets.twitter_icon} width={50} alt=""/>
                        <Image src={assets.googleplus_icon} width={50} alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    ) : (
        <></>
    );
};

export default Page;
