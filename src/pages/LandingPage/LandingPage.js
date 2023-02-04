import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MobileApp from "../../components/MobileApp/MobileApp";
import Preview from "../../components/Preview/Preview";
import style from "./LangingPage.module.css"

function LandingPage() {
    return (
        <>
            <Header></Header>
            <div className={style['preview-page']}>
                <Preview></Preview>
            </div>
            <Category></Category>
            <MobileApp></MobileApp>
            <Footer></Footer>
        </>
    )
}

export default LandingPage;