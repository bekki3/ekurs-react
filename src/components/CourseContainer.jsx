import "./CourseContainer.css";
import Links from "./Links";
import VideoContainer from "./VideoContainer";
const CourseContainer = (props) => {
    return (
        <div id="folderContainer">
          <p
            style={styles.courseCategoryTitle}
          >
            {props.categoryTitle}
          </p>
          
          <div
            style={styles.categoryThumbnails}
          >
            {props.thumbnail.map((item)=> {
              return <VideoContainer imgUrl={item}/>
            })}
          </div>
        </div>
    );
}


const styles = {
    courseCategoryTitle: {
        width: "fit-content",
        margin: "auto",
        color: "antiquewhite",
        marginBottom: "10px",
        fontSize: "28px",
    },
    categoryThumbnails: {
        border: "1px solid white",
        display: "inline-block",
        padding: "3% 0%",
        borderRadius: "15px",
        position: "relative",
        width: "99%",
      }
}
export default CourseContainer;