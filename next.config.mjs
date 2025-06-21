import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: '',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                port: "",
                hostname: "apistore.cybersoft.edu.vn",
                pathname: "**",
            },
            {
                protocol: "https",
                port: "",
                hostname: "i.pravatar.cc",
                pathname: "**",
            },
        ],
        formats: ["image/webp", "image/avif"],
    },
};

export default withFlowbiteReact(nextConfig);
