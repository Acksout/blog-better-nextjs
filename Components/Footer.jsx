import {assets} from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-around gap-2 bg-black py-5 sm:flex-row sm:gap-0">
            <Image src={assets.logo_light} alt="" width={120}/>
            {/* <p className='text-sm text-white'>LOREM IPSUM</p> */}
            <div className="flex">
                <Image src={assets.facebook_icon} alt="" width={40}/>
                <Image src={assets.twitter_icon} alt="" width={40}/>
                <Image src={assets.googleplus_icon} alt="" width={40}/>
            </div>
        </div>
    );
};

export default Footer;
