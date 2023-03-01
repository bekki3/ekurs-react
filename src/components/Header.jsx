import "./Header.css"

const Header = (props) => {


    return(<div className="section">
        <p><img src={require("../images/ekursBrand.png")} alt="ekurs icon"/></p>
        <button onClick={()=>{window.location.href="https://t.me/eKurs"}}>Yordam Olish</button>
        <button onClick={()=> {props.screenChangeHandler("AboutPage")}}>Ma'lumot</button>
        <button onClick={()=> {props.screenChangeHandler("SupportPage")}}>Support</button>
    </div>);
}

export default Header;