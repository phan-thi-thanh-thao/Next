import { NextResponse } from "next/server";

export async function GET(req) {
    console.log("req: ", req);
    // kết nối db
    // const response = [
    //     { id: 1, name: "Nam" },
    //     { id: 2, name: "Thịnh" },
    // ];

    // return NextResponse.json(response, { status: 200 });

    // url = https://apistore.cybersoft.edu.vn/api/Product?keyword=adidas
    const url = new URL(req.url);
    // params = ?keyword=adidas
    const params = new URLSearchParams(url.search);
    const keyword = params.get("keyword");
    console.log("keyword: ", keyword);
    // khi call api thì kiểm tra log ở terminal vì call api ở server

    // từ backend nextjs => kết nối đến backend của apistore.cybersoft
    let uri = "https://apistore.cybersoft.edu.vn/api/Product";
    if (keyword) {
        uri = `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`;
    }

    const res = await fetch(uri);

    if (!res.ok) {
        return new Error("fail to fetch data");
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}
