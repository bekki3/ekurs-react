const VideoContainer = (props) => {
  //console.log(props.courseTitle);
    return (
      <div
        onClick={() => {
          props.screenChangeHandler({ 
            courseTitle: props.courseTitle,
            videos: props.videos
          });
        }}
        className="folder"
        style={{
          backgroundImage: `url(${require("../images/" + props.imgUrl)})`,
          backgroundSize: "cover",
        }}
      ></div>
    );
}

export default VideoContainer;