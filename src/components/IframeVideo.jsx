const IframeVideo = (props) => {
  return (
    <iframe
      src={props.videoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"
      frameBorder={0}
      allowFullScreen
    ></iframe>
  );
};

export default IframeVideo;
