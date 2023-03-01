import MainPage from "./screens/MainPage";
import CoursePage from "./screens/CoursePage";
import AboutPage from "./screens/AboutPage";
import SupportPage from "./screens/SupportPage";
import { useState } from "react";
function App() {
  const screenChangeHandler = (str)=> {
    if(str==="AboutPage"){
      setScreen(<AboutPage screenChangeHandler={screenChangeHandler}/>);
    }else if(str==="SupportPage"){
      setScreen(<SupportPage screenChangeHandler={screenChangeHandler}/>);
    }else if(str==="CoursePage"){
      setScreen(<CoursePage screenChangeHandler={screenChangeHandler}/>);
    }else if(str==="MainPage"){
      setScreen(<MainPage screenChangeHandler={screenChangeHandler}/>);
    }
  }

  const [screen, setScreen] = useState(<MainPage screenChangeHandler={screenChangeHandler}/>);
  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;
