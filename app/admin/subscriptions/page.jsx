"use client";
import SubsTableItem from "@/Components/AdminComponents/SubsTableItem";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

const Page = () => {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        const response = await axios.get("/api/email");
        setEmails(response.data.emails);
    };

    const deleteEmail = async (mongoId) => {
        const response = await axios.delete("/api/email", {
            params: {
                id: mongoId,
            },
        });
        if (response.data.success) {
            toast.success(response.data.msg);
            fetchEmails();
        } else {
            toast.error("Error");
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div className="flex-1 px-5 pt-5 sm:pt-12 sm:pl-16">
            <h1>All Subscription</h1>
            <div className="relative mt-4 overflow-x-auto border border-gray-400 max-w-[600px] h-[80vh] scollbar-hide">
                <table className="w-full text-sm text-gray-500">
                    <thead className="bg-gray-50 text-left text-xs uppercase text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Email Subscription
                        </th>
                        <th scope="col" className="hidden px-6 py-3 sm:block">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {emails.map((item, index) => {
                        return (
                            <SubsTableItem
                                key={index}
                                mongoId={item._id}
                                deleteEmail={deleteEmail}
                                email={item.email}
                                date={item.date}
                            />
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
