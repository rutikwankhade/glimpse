import { useSelector, useDispatch } from "react-redux";
import HomeLayout from "../components/HomeLayout";
import { useState, useEffect } from 'react'

const Settings = () => {

    const { user } = useSelector((state) => state.auth);

    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState('')
    const [isUploading, setIsUploading] = useState(false)



    const handleUploadImage = async (e) => {
        setImage(e.target.files[0])

        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "glimpse");
        data.append("cloud_name", "glimpseapp");
        try {
            setIsUploading(true);
            const response = await fetch(`https://api.cloudinary.com/v1_1/glimpseapp/image/upload`, {
                method: "POST",
                body: data,
            });
            const res = await response.json();
            if (res) {
                setIsUploading(false);
                console.log(res)
                setImageUrl(res.url);
            }
        } catch (error) {
            setIsUploading(false);
        }

    }



    return (
        <div>

            <div className="rounded-xl p-10 border  flex flex-col justify-center bg-white">
                <h1 className="text-xl font-semibold my-4">Update Profile</h1>
                <div className="flex items-center">


                    <img src={user && user.avatar} className="rounded-full mr-8 w-24 h-24" />

                    <input
                        type="file"
                        className=" bg-white text-xl rounded p-2"
                        // accept="image/jpeg, image/png, image/gif, image/jpg"
                        onChange={e => handleUploadImage(e)}
                    />

                    <span>{isUploading ? "uploading..." : ""}</span>
                    <button
                        className={`${image?'':'disabled:'} bg-gray-700 text-white text-xl p-2 px-8 rounded-xl`}>Save</button>
                </div>
            </div>

        </div>
    );
}

Settings.getLayout = page => (
    <HomeLayout>{page}</HomeLayout>
)
export default Settings;