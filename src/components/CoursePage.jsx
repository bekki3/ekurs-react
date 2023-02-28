import "./CoursePage.css";
import IframeVideo from "./IframeVideo";
const CoursePage = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../images/koreanBG.png")})`,
        backgroundSize: "400px",
      }}
    >
      <div
        id="section"
        style={{
          backgroundImage: `url(${require("../images/koreanBg1.jpg")})`,
        }}
      >
        {/* <p>{props.courseTitle}</p> */}
        <p>Koreys Tili Kursi</p>
        <div>
          {" "}
          <a href="index.html">
            <img
              src={require("../images/houseIcon.png")}
              alt="houseIcon"
              style={{ marginLeft: "5px" }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>  

        <IframeVideo videoUrl={"https://www.youtube.com/embed/axVVZmIj7B0?list=PLkJ2AAkSnydnmqCMS0pOrWGBzClEoEnby"}/>

      </div>
    </div>
  );
};

export default CoursePage;
