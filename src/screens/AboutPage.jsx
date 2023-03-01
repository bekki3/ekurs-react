import "./AboutPage.css";
import Footer from "../components/Footer";
const AboutPage = (props) => {
  return (
    <div className="aboutPage">
      <div className="aboutHeader">
        <a style={{ padding: "0", marginTop: "0" }} href="https://ekurs.uz">
          <img src={require("../images/logoTop2.png")} alt="" />
        </a>

        <button onClick={()=> {props.screenChangeHandler("MainPage")}}>Bosh Sahifa</button>
        <a href="https://t.me/eKurs">Forum</a>
        <button onClick={()=> {props.screenChangeHandler("SupportPage")}}>Support</button>
      </div>

      <div className="AboutContainer">
        <h3>Loyihamiz haqida.</h3>
        <p className="paragraph">
          Biz boshlagan loyiha eKurs deb ataladi va "Elektron kurslar" degan
          ma'noni anglatadi. Loyiha-bu zamon talab qiladigan, to'liq bepul,
          samarali va oson bo'lgan kurslar to'plami. Loyihaning asosiy maqsadi -
          o'zbek tilida ochiq manbalarni yaratish orqali O'zbekiston ta’lim
          darajasini yaxshilashga xissa qo’shish.
          <br />
          Loyihaning tuzilishi - bizning video-kurslarimiz fanlar haqida asosiy
          fundamental bilimni berib o’tadi. Darsliklarimizni ko'rgandan so'ng,
          o’rganuvchilar qo’shimcha bo’lgan narsalarni o'zlari o’rganishni davom
          ettirishlari mumkin bo'ladi. Videolar qisqa va ularda juda ko'p
          foydali ma'lumotlar mavjud. Barcha kurslarda o’quvchilar o'z
          bilimlarini mustahkamlashlari uchun kichik loyihalar yoki vazifalar
          mavjud. Masalan, WEB-kurslarini tugatgandan so’ng, eKurs.uz saytiga
          o'xshash saytlar yaratishlari mumkin bo'ladi. Agar o'qish paytida
          biron bir savol tug'ilsa, biz ishga tushirgan
          <a href="https://t.me/eKurs"> Telegram Forum</a> ham mavjud, unda kurs
          davomida tug’ilgan savoli borlar o'z savollarini berishlari mumkin va
          bilganlar yoki o'qituvchilardan javob olishadi.
          <br />
          Kurslarga kirish juda oson qilingan, shunda har kim undan hech qanday
          mashaqqatlarsiz foydalanishi mumkin. Masalan, kirish uchun hech qanday
          akkount bo'lishi shart emas va kirish sahifasi yo'q. YouTube
          sahifasida videolarni ko'rishni afzal ko'rganlar uchun YouTube-da,
          <a href="https://www.youtube.com/channel/UCMcyzrIxs-qGwQm7q1FjHLw"> eKurs </a>
          kanalida ham video-kurslar qo’yib boriladi
        </p>
        <br />
        <h3>Bizning Jamoa</h3>
        <img src={require("../images/bs.jpg")} alt="" />
        <h4>Behzod Shuhratov</h4>
        <p className="paragraph">
          Behzod Shuhratov, Toshkent shahridagi INHA universitetining ikkinchi
          bosqich talabasi. Universitetga qabul qilinganidan so'ng dasturlashni
          qiziqish bilan o'rganib keladi. C++, Python, Java va JavaScript
          dasturlash tillarini biladi va har xil ishlarida qo'llaydi.
          O'zbekistonning yangi avlodini takomillashtirish uchun o'z bilimlari
          bilan bo'lishishni rejalashtirgan va shu loyihani ishga tushirgan.{" "}
        </p>
        <br />
        <br />
        <img src={require("../images/fm.jpg")} alt="" />
        <h4>Farrukh Muminov</h4>
        <p className="paragraph">
          Koreys Tili va ScetchUp kurslari muallifi Farrukh Muminov koreys
          tilidan 15 yillik, Arxitektura va Grafik loyihalar bilan ishlashda 10
          yillik xalqaro tajribali va diplomli mutaxassisdir.
        </p>
        <br />
        <br />
        <img src={require("../images/ne.jpg")} alt="" />
        <h4>Nurbek Erkinov</h4>
        <p className="paragraph">
          Saytimiz dizayneri TATU qoshidagi 2-son akademik litsey o'quv
          davrlarida dasturlashga qiziqqan. Matematika, Ingliz tili, Informatika
          fanlarini a'lo darajada o'qigan. Litseyni bitirib, Jizzax Politexnika
          institutida ta'lim olib kelyapti. O'qishdan tashqari, dizayn sohasiga
          juda qiziqadi va shu sohada ish yuritadi. Murojaat uchun telegram
          manzili: <a href="https://t.me/erkinov_nurbek">@erkinov_nurbek</a>
        </p>
        <br />
        <br />
        <img src={require("../images/at.jpg")} alt="" />
        <h4>Azizullo Temirov</h4>
        <p className="paragraph">
          Azizullo Temirov, Toshkent shahridagi INHA universitetining ikkinchi
          bosqich talabasi. Hozirda bo'sh vaqtini dasturlashni o'rganishga
          sarflamoqda. Maqsadi: Kelajakda o'z sohasida yetuk mutaxassis bo'lib
          yetishib, kelayotgan yosh avlodga har tomonlama ko'mak berish.
          Murojaat uchun ijtimoiy tarmoqlarda{" "}
          <a href="https://t.me/Azakapro">@azakapro</a> deb izlang.
        </p>
        <br />
        <br />

        <img src={require("../images/shab.jpg")} alt="" />
        <h4>Shahnoza Bobomurodova</h4>
        <p className="paragraph">
          Shahnoza Bobomurodova, O'zbekiston davlat jahon tillari universiteti
          talabasi. Ingliz tilini 5 yildan beri o'rganib keladi. Chet tillarini
          o'rganishga qiziqadi va yosh avlodga chet tillarini o'rgatishni
          yoqtiradi.
        </p>
        <br />
        <br />
        
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
