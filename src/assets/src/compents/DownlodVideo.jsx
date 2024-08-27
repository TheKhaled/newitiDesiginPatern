import React, { useState } from "react";
import axios from "axios";

const VideoDownloader = () => {
  const [linkVideo, setLinkVideo] = useState(
    "https://www.youtube.com/watch?v=0bZSBOzqZrk"
  );
  const [error, setError] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const isValidYouTubeLink = (url) => {
    const regex = /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]+$/;
    return regex.test(url);
  };

  const downloadFromYouTube = async (link) => {
    if (isValidYouTubeLink(link)) {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/download",
          {
            url: link,
          }
        );

        if (response.data && response.data.downloadUrl) {
          setDownloadLink(response.data.downloadUrl);
        } else {
          setError("Failed to get the download link.");
        }
      } catch (err) {
        console.error("Error in downloadFromYouTube:", err); // Log error details
        setError("Failed to download the video. Please try again later.");
      }
    } else {
      setError("The provided link is not a valid YouTube video URL.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={linkVideo}
        onChange={(e) => setLinkVideo(e.target.value)}
        placeholder="Enter YouTube video link"
      />
      <button onClick={() => downloadFromYouTube(linkVideo)}>
        Download Video
      </button>
      {error && <p>{error}</p>}
      {downloadLink && (
        <a href={downloadLink} download="video.mp4">
          Click here to download your video
        </a>
      )}
    </div>
  );
};

export default VideoDownloader;
