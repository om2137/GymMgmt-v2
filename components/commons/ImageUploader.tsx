import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export const ImageUploader = () => {
    const [image, setImage] = useState<string | null>(null);
    const [status, setStatus] = useState<UploadStatus>('idle');

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);
        if (file) {
            setStatus('uploading'); 
            toast.warning('Image upload started');
            try {
                // Simulate upload delay
                // await new Promise((resolve) => setTimeout(resolve, 4000)); 
                const formData = new FormData();
                const imageUrl = URL.createObjectURL(file);
                formData.append('file', file);
                // formData.append('url', imageUrl);
                formData.append('upload_preset', 'V2-assets');
                console.log(imageUrl);
                const response = await axios.post('https://api.cloudinary.com/v1_1/dqpsoptzm/image/upload', formData);
                console.log(response);
                setImage(response.data.secure_url);
                setStatus('success');
            } catch (error) {
                console.error('Upload failed:', error);
                toast.error('Image upload failed');
                setStatus('error'); 
            }
        } else {
            setStatus('error'); 
        }
    };

    return (
        <div className="relative w-20 h-24 rounded overflow-hidden flex justify-center items-center border-2 border-transparent">
            
            <div
                className={`absolute inset-0 border-2 rounded pointer-events-none 
                    ${status === 'uploading' ? 'animate-border-cursor' : ''}
                    ${status === 'success' ? 'border-green-500' : ''}
                    ${status === 'error' ? 'border-red-500' : ''}
                    ${status === 'uploading' ? 'border-yellow-500' : ''}
                `}
            ></div>

            {/* Image or Placeholder */}
            {image ? (
                <Image src={image} alt="Uploaded" fill className="h-full w-full object-cover rounded " />
            ) : (
                <span className="text-2xl font-serif">img</span>
            )}

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className=" absolute inset-0 opacity-0 cursor-pointer"
            />
        </div>
    );
};
