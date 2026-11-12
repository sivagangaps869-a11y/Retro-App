const cloudName = "xb3llsfm";
const uploadPreset = "retro_app";

export const uploadImageAPI = async (imageFile) => {

    const formData = new FormData();

    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    return data.secure_url;
};