import { getProductDetailByIDAction } from "@/app/actions/services/productAPI";
import Image from "next/image";
import React from "react";

export async function generateMetadata(props) {
    const { id } = await props.params;
    const product = await getProductDetailByIDAction(id);

    return {
        title: `${product.name} | Shoe Shop - Cửa hàng giày chất lượng cao`,
        description: product.description,
        openGraph: {
            title: `${product.name} | Shoe Shop - Cửa hàng giày chất lượng cao`,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 600,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} | Shoe Shop - Cửa hàng giày chất lượng cao`,
            description: product.description,
            images: [product.image],
        },
    };
}

const Detail = async (props) => {
    console.log("props: ", props);
    // props.params.id
    const { id } = await props.params;
    console.log("params id: ", id);

    // call api bằng action và render data lên giao diện
    const product = await getProductDetailByIDAction(id);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500">Detail Shoe</h1>

            <div className="flex gap-4">
                <div className="w-1/4">
                    <Image
                        src={product.image}
                        width={200}
                        height={200}
                        quality={100}
                        alt=""
                    />
                </div>
                <div className="w-3/4">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
