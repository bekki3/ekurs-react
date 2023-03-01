import "./CoursePage.css";
import IframeVideo from "../components/IframeVideo";
import Footer from "../components/Footer";
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
        <p>{props.coursePageData.courseTitle}</p>
        <div>
          {" "}
          
            <img
            onClick={()=>{props.screenChangeHandler("MainPage")}}
              src={require("../images/houseIcon.png")}
              alt="houseIcon"
              style={{ marginLeft: "5px" }}
            />
        
        </div>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "center" }}>  

      {props.coursePageData.videos.map((url)=>{return <IframeVideo videoUrl={url}/>})}
        
        

      </div>
      < Footer />
    </div>
  );
};

export default CoursePage;
