import Link from "next/link";
import React from "react";

const PageNotFound = () => {
    return (
        <div>
            <h1>page này ko tồn tại !!!</h1>

            <Link className="bg-amber-400" href={"/"}>
                Go to Home
            </Link>
        </div>
    );
};

export default PageNotFound;
