import {assets, blog_data} from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({title, description, category, image, id}) => {
    return (
        <div
            className="max-w-[330px] sm:max-w-[300px] bg-white border border-black transition-all hover:shadow-[-7px_7px_0px_#000000]">
            <Link href={`/blogs/${id}`}>
                <Image
                    src={image}
                    alt=""
                    width={400}
                    height={400}
                    className="border-b border-black"
                />
            </Link>
            <p className="mt-5 ml-5 inline-block bg-black px-1 text-sm text-white">
                {category}
            </p>
            <div className="p-5">
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
                    {title}
                </h5>
                {/* Do not XSS my shit */}
                <p
                    className="mb-3 text-sm tracking-tight text-gray-700"
                    dangerouslySetInnerHTML={{__html: description.slice(0, 120)}}
                ></p>
                <Link
                    href={`/blogs/${id}`}
                    className="inline-flex items-center py-2 text-center font-semibold"
                >
                    Read more{" "}
                    <Image src={assets.arrow} className="ml-2" alt="" width={12}/>
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;
