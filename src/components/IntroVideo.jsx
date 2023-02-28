import "./IntroVideo.css"
const IntroVideo = () => {

    return (
      <div id="header">
        <div id="intro">
          <iframe
            width="727"
            height="409"
            src="https://www.youtube.com/embed/EI5ts4dsbxA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <img src={require("../images/cssIcon.png")} alt="" id="cssIcon" />
        <a href="https://www.youtube.com/channel/UCMcyzrIxs-qGwQm7q1FjHLw">
          <img src={require("../images/ytIcon.png")} alt="" id="htmlIcon" />{" "}
        </a>
        <img src={require("../images/jsIcon.png")} alt="" id="jsIcon" />
        <img src={require("../images/laptopImg.png")} alt="" id="laptopImg" />
        <div id="textImg">
          <span style={{color: "#555", fontSize: "2.6vw"}}>
            Biz bilan bepul bilim oling.
          </span>
          <br />

          <strong style={{color: "rgb(66, 66, 66)"}}>
            Kerakli
            <span style={{color: "rgb(247, 190, 4)"}}>kursni</span> toping va{" "}
            <br />
            <span style={{fontSize: "2.4vw"}}>hoziroq o'rganishni boshlang</span>
          </strong>
        </div>
      </div>
    );
};

export default IntroVideo;