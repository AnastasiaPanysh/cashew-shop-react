import style from './Header.module.css'

function Header() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                <p>Ways to pay</p>
                <p>Shop</p>
                <p>For business</p>
            </nav>
            <div className={style['login-btns']}>
                <div className={style['merchant-login']}>Merchant login</div>
                <div className={style['customer-login']}>Customer login</div>
            </div>
        </div>
    )
}

export default Header