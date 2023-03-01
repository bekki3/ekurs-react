import "./CourseContainer.css";
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
            {props.course.map((item)=> {
              return (
                <VideoContainer
                  imgUrl={item.courseThumbnail}
                  courseTitle={item.courseTitle}
                  videos={item.videos}
                  screenChangeHandler={props.screenChangeHandler}
                />
              );
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