import "./Header.css"

const Header = () => {


    return(<div className="section">
        <p><img src={require("../images/ekursBrand.png")} alt="ekurs icon"/></p>
        <a href="https://t.me/eKurs" title="Yordam Olish">Yordam Olish</a>
        <a href="malumot.html">Ma'lumot</a>
        <a href="supportPage.html">Support</a>
    </div>);
}

export default Header;