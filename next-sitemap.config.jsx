/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.example.com", // URL của website
    generateRobotsTxt: true, // Tự động tạo robots.txt
    changefreq: "daily", // Tần suất thay đổi của các trang(options: 'hourly', 'daily', 'weekly',......, 'never')
    priority: 0.7, // Độ ưu tiên của các trang (0.0 - 1.0)
    sitemapSize: 5000, // giới hạn số lượng URL tối đa trong 1 sitemap
    exclude: ["/admin/*", "/private/*"], // Các trang không muốn gồm trong sitemap

    //chỉnh sử sitemap cho những trang không có dấu (.) trong URL
    // Dùng khi URL của bạn có dấu chấm (.) như 'about.page'
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/private"],
            },
        ],
        additionalSitemaps: [
            "https://www.example.com/my-custom-sitemap-1.xml",
            "https://www.example.com/my-custom-sitemap-2.xml",
        ],
    },
    // Tùy chọn thêm để tùy chỉnh sitemap
    transform: async (config, path) => {
        // Có thể tùy chỉnh priority và changefreq cho từng đường dẫn
        return {
            loc: "/custom-page",
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
    // Cấu hình bổ sung nếu cần
    additionalPaths: async (config) => {
        // Thêm các đường dẫn động
        const dynamicPaths = [
            // Ví dụ: các trang được tạo động
        ];
        return dynamicPaths;
    },
};
