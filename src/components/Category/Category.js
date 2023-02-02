import style from './Category.module.css';

function Category() {
    const click = () => {
        alert('Success event');
    }
    return(
        <div className={style['container']}>
            <h1 className={style['h1']}>Categories</h1>
            <div className={style['wrapper']}>
                <div className={style['item1']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={click}>Electronics</div>
                </div>
                <div className={style['item2']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={click}>Fashion & accessories</div>
                </div>
                <div className={style['item3']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={click}>Beauty & health</div>
                </div>
                <div className={style['item4']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={click}>Home & furniture</div>
                </div>
            </div>
            <div className={style['viewAllBtn']} onClick={click}>
                <p>View all</p>
                <div className={style['arrow']}></div>
            </div>
        </div>
    )
}

export default Category;