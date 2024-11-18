// VideoCard.jsx
import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={video.image} alt="Course Image" className="w-full rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{video.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{video.description}</p>
            <div className="flex items-center mt-4">
                <img src={video.instructor.avatar} alt="Instructor Avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-2">
                    <p className="text-gray-800 font-medium">{video.instructor.name}</p>
                    <p className="text-gray-500 text-sm">{video.instructor.role}</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-yellow-500">
                    {'★'.repeat(Math.floor(video.rating.stars)) + '☆'.repeat(5 - Math.floor(video.rating.stars))}
                    <span className="ml-1 text-gray-500 text-sm">{video.rating.stars} ({video.rating.count})</span>
                </div>
                <p className="text-custom-green font-semibold text-lg">{video.price}</p>
            </div>
        </div>
    );
};

export default VideoCard;