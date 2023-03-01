import CourseContainer from "../components/CourseContainer";
import Header from "../components/Header";
import IntroVideo from "../components/IntroVideo";
import Footer from "../components/Footer";
import Links from "../components/Links";
const MainPage = (props) => {
  return (
    <div>
      <Header screenChangeHandler={props.screenChangeHandler}/>
      <IntroVideo />
      {Links.map((item, index)=> {
        return <CourseContainer categoryTitle={item.categoryTitle} thumbnail={item.thumbnail}/>
      })}
      <Footer screenChangeHandler={props.screenChangeHandler}/>
    </div>
  );
}

export default MainPage;