const VideoContainer = (props) => {
    return (
      <a href="htmlFolder.html">
        <div
          className="folder"
          id="htmlFolder"
          style={{
            backgroundImage: `url(${require("../images/"+props.imgUrl)})`,
            backgroundSize: "cover",
          }}
        ></div>
      </a>
    );
}

export default VideoContainer;