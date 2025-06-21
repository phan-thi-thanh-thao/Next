export const placeholderImage = "https://i.pravatar.cc/300";

export const isValidImage = (url) => {
    return (
        url.startsWith("https://") &&
        (url.endsWith(".png") || url.endsWith(".jpg"))
    );
};
