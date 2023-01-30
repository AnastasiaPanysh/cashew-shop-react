import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
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
        </>
    )
}

export default LandingPage;