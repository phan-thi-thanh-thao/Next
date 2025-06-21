"use client";
import React, { useState } from "react";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    return (
        <>
            <Navbar fluid rounded className="border-b-2 border-b-teal-500 mb-4">
                <NavbarBrand as={Link} href="https://flowbite-react.com">
                    <img
                        src="/next.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite React Logo"
                    />
                </NavbarBrand>
                {/* <NavbarToggle /> */}
                <div className="flex md:order-2">
                    <div>
                        <form
                            className="flex align-middle"
                            onSubmit={(e) => {
                                e.preventDefault();
                                router.push(`/search?keyword=${keyword}`);
                            }}
                        >
                            <input
                                type="text"
                                className="border border-amber-600"
                                onChange={(e) => {
                                    setKeyword(e.target.value);
                                }}
                            />
                            <Link
                                href={`/search?keyword=${keyword}`}
                                className="bg-green-600 text-white"
                            >
                                Search
                            </Link>
                        </form>
                    </div>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink href="/" active>
                        Home
                    </NavbarLink>
                    <NavbarLink as={Link} href="/about">
                        About
                    </NavbarLink>
                    <Link href="/register">Register</Link>
                    <NavbarLink as={Link} href="/login">
                        Login
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    );
};

export default Header;
