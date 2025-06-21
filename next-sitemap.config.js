/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.example.com", // URL của website
    generateRobotsTxt: true, // Tự động tạo robots.txt
    changefreq: "daily", // Tần suất thay đổi của các trang(options: 'hourly', 'daily', 'weekly',......, 'never')
    priority: 0.7, // Độ ưu tiên của các trang (0.0 - 1.0)
    sitemapSize: 7000, // giới hạn số lượng URL tối đa trong 1 sitemap
    exclude: ["/admin", "/admin/*"], // Các trang không muốn gồm trong sitemap
    //chỉnh sử sitemap cho những trang không có dấu (.) trong URL
    // Dùng khi URL của bạn có dấu chấm (.) như 'about.page'
    // Thêm transform để custom URLs
    transform: async (config, path) => {
        // Skip admin paths
        if (path.startsWith("/admin")) {
            return null;
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
    additionalPaths: async (config) => {
        // Fetch dữ liệu từ API/CMS (ví dụ: danh sách bài viết)
        const posts = await fetch(
            "https://apistore.cybersoft.edu.vn/api/Product/"
        )
        
        const data = await posts.json();
        console.log('data: ', data); // ctr + shift + L : để log nhanh

        // Trả về mảng các URL động
        return data.content.map((item) => ({
            loc: `/detail/${item.id}`, // Đường dẫn thực tế
            changefreq: "daily",
            priority: 0.8,
        }));
    },
    // Thêm để generate static paths
    generateIndexSitemap: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "*",
                disallow: ["/admin", "/admin/*"], // Cẩn thận với trailing slash
            },
        ],
        additionalSitemaps: [
            "https://www.example.com/my-custom-sitemap-1.xml",
            "https://www.example.com/my-custom-sitemap-2.xml",
        ],
    },
};
