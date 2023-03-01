const VideoContainer = (props) => {
    return (
      
        <div
        onClick={()=>{props.screenChangeHandler("CoursePage"); console.log("hsd")}}
          className="folder"
          style={{
            backgroundImage: `url(${require("../images/"+props.imgUrl)})`,
            backgroundSize: "cover",
          }}
        >
        </div>
      
    );
}

export default VideoContainer;