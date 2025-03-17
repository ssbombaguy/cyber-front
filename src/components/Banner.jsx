import classes from '../modules/Banner.module.scss'
import Iphone from '../assets/Iphone Image.svg'
export const Banner = () => {
    return (
        <div className={classes["banner-wrapper"]}>
            <div className={classes['banner-context']}>
                <div>
                    <h3>Pro.Beyond</h3>
                    <h1>IPhone 14 <span>Pro</span></h1>
                    <p>Created to change everything for the better.For everyone</p>
                </div>
                <div>
                    <button className={classes["shop-btn"]}>Shop Now</button>
                </div>
            </div>
            <figure>
                <img src={Iphone} alt="iphone-14-pro"/>
            </figure>

        </div>
    )
}