import { getProductByKeywordAction } from "@/app/actions/services/productAPI";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Search = async ({ searchParams }) => {
    // props.searchParams.keyword
    const search = await searchParams;
    const keyword = search.keyword || "";
    console.log("keyword: ", keyword);

    const data = await getProductByKeywordAction(keyword);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-5xl mb-6">
                Danh sách kết quả tìm kiếm
            </h1>

            <div className="grid grid-cols-3 gap-2">
                {data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="border border-amber-700 p-4"
                        >
                            <Image
                                src={item.image}
                                width={500}
                                height={500}
                                quality={100}
                                alt=""
                                className="w-full"
                            />

                            <h2 className="text-2xl text-green-500">
                                {item.name}
                            </h2>
                            <p>{item.description}</p>
                            <p className="text-red-500 text-3xl mt-2">
                                {item.price}$
                            </p>
                            <Link
                                href={`/detail/${item.id}`}
                                className="bg-green-500 block p-3"
                            >
                                Go to detail
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
