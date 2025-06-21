import { NextResponse } from "next/server";

export function middleware(req) {
    console.log("req: ", req);

    // những thông tin get từ cookie phải lưu xuống cookie lúc login thành công
    // localStorage chỉ sử dụng được ở client
    // đối với nextjs, check middleware ở server phải dùng cookie
    const token = req.cookies.get("accessToken"); // lấy token từ cookie
    const role = req.cookies.get("userRole");

    // kiểm tra token và truy cập vào url /admin => có được phép vào admin hay ko
    if (!token && req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // kiểm tra có đủ quyền vào admin hay không ?
    if (token && role === "user") {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/profile/:path*"],
};
