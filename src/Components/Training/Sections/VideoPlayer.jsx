import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-http-source-selector';

const VideoPlayer = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        // Initialize Video.js
        playerRef.current = videojs(videoRef.current, {
            controls: true,
            autoplay: false,
            preload: 'none',
            controlBar: {
                volumePanel: {
                    inline: false
                },
                children: [
                    'playToggle',
                    'volumePanel',
                    'currentTimeDisplay',
                    'timeDivider',
                    'durationDisplay',
                    'progressControl',
                    'fullscreenToggle'
                ]
            }
        });

        // Prevent right-click and download
        videoRef.current.addEventListener('contextmenu', (e) => e.preventDefault());

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
            }
        };
    }, []);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.src({ src: videoSrc, type: 'video/mp4' });
        }
    }, [videoSrc]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin" />
        </div>
    );
};

export default VideoPlayer;