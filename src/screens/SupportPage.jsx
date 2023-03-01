import "./SupportPage.css";
import Footer from "../components/Footer";
const SupportPage = (props) => {
  return (
    <div className="supportPage">
      <div className="aboutHeader">
        <a style={{ padding: "0", marginTop: "0" }} href="https://ekurs.uz">
          <img src={require("../images/logoTop2.png")} alt="" />
        </a>
        <button onClick={()=> {props.screenChangeHandler("MainPage")}}>Bosh Sahifa</button>
        <a href="https://t.me/eKurs">Forum</a>
      </div>
      <div className="supportContainer">
        <h3
          style={{
            letterSpacing: "0.1em",
            color: "#2fb2f3",
            fontWeight: "bold",
          }}
        >
          LOYIHAMIZNI QO'LLAB-QUVVATLASH
        </h3>
        <p></p>
        <br />
        <h3>
          Agar siz ushbu kurslarni foydali deb bilsangiz, loyihamizni quyidagi
          yo'llar bilan qo'llab-quvvatlashingiz mumkin.
        </h3>
        <br />
        <br />
        <h4>
          1. Siz ushbu saytning linkini tanishlaringizga yuborishingiz mumkin.
          <br />
          Link: <em style={{ color: "#7ed4ff" }}>ekurs.uz</em>
        </h4>
        <br />
        <br />
        <h4>
          2. Loyihani moliyaviy jihatdan qo'llab-quvvatlashingiz ham mumkin.
          Yig'ilgan pul O'qituvchilarimizga va Yangi Kurslar qo'shishga
          ishlatiladi.
        </h4>
        <br />
        <img src={require("../images/cc.png")} alt="Credit Card" id="creditCard" />
        <p
          style={{
            letterSpacing: "0.1em",
            fontWeight: "bold",
            fontSize: "22px",
            
          }}
        >
          Karta Raqami: <br />
          8600 0417 1364 5597
        </p>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
