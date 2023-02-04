import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                <p>Company</p>
                <p>Shoppers</p>
                <p>Merchants</p>
                <p>Subscribe</p>
            </nav>
        </div>
    )
}

export default Footer