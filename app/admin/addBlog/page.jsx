"use client";
import {assets} from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, {useState} from "react";
import {toast} from "react-toastify";

const Page = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        // Set your name
        author: "Rakshit",
        authorImg: "/author_img.jpg",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({...data, [name]: value}));
        console.log(data);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("author", data.author);
        formData.append("authorImg", data.authorImg);
        formData.append("image", image);
        const response = await axios.post("/api/blog", formData);
        if (response.data.success) {
            toast.success(response.data.msg);
            setImage(false);
            setData({
                title: "",
                description: "",
                category: "Misc",
                // Set your name
                author: "Rakshit",
                authorImg: "/author_img.jpg",
            });
        } else {
            toast.error("Error");
        }
    };

    return (
        <>
            <form onSubmit={onSubmitHandler} className="px-5 pt-5 sm:pt-12 sm:pl-16">
                <p className="text-xl">Upload thumbnail</p>
                <label htmlFor="image">
                    <Image
                        className="mt-4"
                        src={!image ? assets.upload_area : URL.createObjectURL(image)}
                        width={140}
                        height={70}
                        alt=""
                    />
                </label>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                    required
                />
                <p className="mt-4 text-xl">Blog title</p>
                <input
                    name="title"
                    onChange={onChangeHandler}
                    value={data.title}
                    className="mt-4 w-full border px-4 py-3 sm:w-[500px]"
                    type="text"
                    placeholder="Title..."
                    required
                />
                <p className="mt-4 text-xl">Blog Description</p>
                <textarea
                    name="description"
                    onChange={onChangeHandler}
                    value={data.description}
                    className="mt-4 w-full border px-4 py-3 sm:w-[500px]"
                    type="text"
                    placeholder="Content..."
                    rows={6}
                    required
                />
                <p className="mt-4 text-xl">Blog category</p>
                <select
                    name="category"
                    onChange={onChangeHandler}
                    value={data.category}
                    className="mt-4 w-40 border px-4 py-3 text-gray-500"
                >
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Misc">Misc</option>
                </select>
                <br/>
                <button type="submit" className="mt-8 h-12 w-40 bg-black text-white">
                    ADD
                </button>
            </form>
        </>
    );
};

export default Page;
