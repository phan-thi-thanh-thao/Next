import React from "react";

const AdminTemplate = ({ children }) => {
    return (
        <div className="flex h-screen bg-white text-black">
            <div className="w-1/5 h-screen bg-blue-500">side bar</div>
            <div className="w-4/5">{children}</div>
        </div>
    );
};

export default AdminTemplate;
