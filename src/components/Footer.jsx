import "./Footer.css"

const Footer = () => {


    return ( 
    <div id="footer">
    <div id="copyright"> <h1>Aloqa</h1> <br/> 
        +998 97 777 79 07 <br /> +998 97 777 73 07
    <br /><br /> ekursuz@gmail.com </div>
    <div id="rightPart" style={{textAlign: "center"}}>
        <div id="support">
            <a href="supportPage.html"><button className="glow-on-hover" type="button">Qo'llab-Quvvatlash</button></a>
        </div>
        <div id="media">
        <ul>
            <li><a href="https://www.instagram.com/behzod2204">
                <img src={require("../images/iicon.png")} alt="instagram link" /></a></li>
            <li><a href="https://t.me/ekursuz">
                <img src={require("../images/ticon.png")} alt="telegram link" /></a></li>
            <li><a href="https://github.com/bekki3">
                <img src={require("../images/gicon.png")} alt="github link" /></a></li>
            <li><a href="https://www.youtube.com/channel/UCMcyzrIxs-qGwQm7q1FjHLw" id="d">
                <img src={require("../images/yicon.png")} alt="YouTube link" /></a></li>
        </ul>
    </div>
    <p style={{color: "white", fontSize: "1.5vmax"}}>&copy; 2023 eKURS.UZ </p>
    </div>

</div>);
}

export default Footer;