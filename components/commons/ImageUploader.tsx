import { useState } from 'react';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export const ImageUploader = () => {
    const [image, setImage] = useState<string | null>(null);
    const [status, setStatus] = useState<UploadStatus>('idle');

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setStatus('uploading'); // Start upload animation

            try {
                // Simulate upload delay
                await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulated upload duration
                const imageUrl = URL.createObjectURL(file);
                setImage(imageUrl);
                setStatus('success'); // Mark upload as successful
            } catch (error) {
                console.error('Upload failed:', error);
                setStatus('error'); // Mark upload as failed
            }
        } else {
            setStatus('error'); // Error if no file is selected
        }
    };

    return (
        <div className="relative w-20 h-24 rounded overflow-hidden flex justify-center items-center border-2 border-transparent">
            {/* Animated Border */}
            <div
                className={`
                    absolute inset-0 rounded 
                    ${status === 'success' ? 'border-green-500' : ''}
                    ${status === 'error' ? 'border-red-500' : ''}
                `}
            ></div>
            <div
                className={`absolute inset-0 border-2 rounded pointer-events-none ${
                    status === 'uploading' ? 'animate-border-cursor' : ''
                }`}
            ></div>

            {/* Image or Placeholder */}
            {image ? (
                <img src={image} alt="Uploaded" className="h-full w-full object-cover rounded" />
            ) : (
                <span className="text-2xl font-serif">img</span>
            )}

            {/* Invisible File Input */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
            />
        </div>
    );
};
