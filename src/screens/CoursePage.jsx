import "./CoursePage.css";
import IframeVideo from "../components/IframeVideo";
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
          
            <img
            onClick={()=>{props.screenChangeHandler("MainPage"); console.log("hsd")}}
              src={require("../images/houseIcon.png")}
              alt="houseIcon"
              style={{ marginLeft: "5px" }}
            />
        
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
