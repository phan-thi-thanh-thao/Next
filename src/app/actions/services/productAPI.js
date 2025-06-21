// server action là các hàm xử lý trên server(nơi chứa source nextjs)

export const getAllProductAction = async () => {
    const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product/", {
        next: { revalidate: 10 },
    });
    const data = await res.json();

    return data.content;
};

// viết action getProductDetailByID
export const getProductDetailByIDAction = async (id) => {
    const res = await fetch(
        `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    );

    const data = await res.json();

    return data.content;
};

export const getProductByKeywordAction = async (keyword) => {
    const res = await fetch(
        `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );

    const data = await res.json();

    return data.content;
};
