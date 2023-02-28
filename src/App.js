import CourseContainer from "./components/CourseContainer";
import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import Footer from "./components/Footer";
import CoursePage from "./components/CoursePage";
import Links from "./components/Links";
Links.map((item, index)=> {
  console.log(item);
})
function App() {
  return (
    <div className="App">
      <Header />
      <IntroVideo />
      {Links.map((item, index)=> {
        return <CourseContainer categoryTitle={item.categoryTitle} thumbnail={item.thumbnail}/>
      })}
      <Footer />
      <CoursePage />
    </div>
  );
}

export default App;
